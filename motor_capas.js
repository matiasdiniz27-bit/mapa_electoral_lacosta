// =========================================================
// MÓDULO EXTRA: MOTOR VISUAL DE CAPAS ESTRATÉGICAS
// =========================================================

// Variables para limpiar el mapa cuando cambiás de opción
let capasAvanzadasActivas = [];

const paletaTermica = { "critico": "#ef4444", "alto": "#f59e0b", "medio": "#eab308", "bajo": "#22c55e" };

document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('input[name="tipoCapa"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const modo = e.target.value;
            const añoActual = document.getElementById('yearSelect').value;
            
            // 1. Limpiamos TODAS las capas (las de app.js y las de este archivo)
            if (typeof capasActivasZonas !== 'undefined') {
                capasActivasZonas.forEach(c => mapaBase.removeLayer(c));
                capasActivasZonas = [];
            }
            if (typeof capasActivasMesas !== 'undefined') {
                capasActivasMesas.forEach(c => mapaBase.removeLayer(c));
                capasActivasMesas = [];
            }
            capasAvanzadasActivas.forEach(c => mapaBase.removeLayer(c));
            capasAvanzadasActivas = [];

            // 2. Ruteo de Capas Base (Llama a las funciones viejas de app.js)
            if (modo === 'zonas') {
                if (typeof actualizarDashboard === 'function') actualizarDashboard(añoActual);
                return;
            } 
            if (modo === 'mesas') {
                const dataElectoral = db[añoActual];
                for (const circuito in mesasTestigo) {
                    const infoCircuito = dataElectoral.circuitos.find(c => c.id === circuito);
                    const colorPunto = "#f59e0b"; // Dorado
                    mesasTestigo[circuito].forEach(escuela => {
                        const marcador = L.circleMarker(escuela.coords, { radius: 8, fillColor: colorPunto, color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.95 }).addTo(mapaBase);
                        const popup = `<div style="font-family:'Montserrat'; padding:5px; min-width:160px;"><h4 style="color:#f59e0b; margin-bottom:5px; font-size:13px; font-weight:800;">🏫 ${escuela.nombre}</h4><p style="font-size:12px; margin:0; color:#94a3b8;">Mesas: ${escuela.mesas}</p><p style="font-size:12px; margin:5px 0 0 0; font-weight:bold;">Zona: ${circuito}</p></div>`;
                        marcador.bindPopup(popup, { className: 'map-tooltip' });
                        capasAvanzadasActivas.push(marcador);
                    });
                }
                return;
            }

            // 3. CAPAS ESTRATÉGICAS NUEVAS 
            
            if (modo === 'ausentismo') {
                for (const zona in capasEstrategicas.ausentismo) {
                    const datos = capasEstrategicas.ausentismo[zona];
                    const color = paletaTermica[datos.nivel];
                    const circulo = L.circle(datos.coords, { color: color, weight: 2, fillColor: color, fillOpacity: 0.35, radius: datos.radio }).addTo(mapaBase);
                    const popup = `<div style="text-align:center; min-width: 140px;"><strong style="color:${color}; font-size:13px; text-transform:uppercase;">📍 ${zona}</strong><div style="font-size:1.8rem; font-weight:900; color:#f8fafc; margin-top:5px;">${datos.porcentaje}%</div><div style="font-size:10px; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">Ausentismo Histórico</div></div>`;
                    circulo.bindTooltip(popup, { direction: "top", className: 'map-tooltip', offset: [0, -10] });
                    capasAvanzadasActivas.push(circulo);
                }
            } 
            
            else if (modo === 'locales') {
                capasEstrategicas.localesPartidarios.forEach(local => {
                    const marcador = L.circleMarker(local.coords, { radius: 10, fillColor: local.color, color: "#fff", weight: 3, opacity: 1, fillOpacity: 1 }).addTo(mapaBase);
                    const popup = `<div style="font-family:'Montserrat'; padding:5px; min-width:150px;"><h4 style="color:${local.color}; margin-bottom:5px; font-size:13px; font-weight:800;">🏢 ${local.nombre}</h4><p style="font-size:11px; margin:0; color:#94a3b8; text-transform:uppercase;">Partido: ${local.partido}</p></div>`;
                    marcador.bindPopup(popup, { className: 'map-tooltip' });
                    capasAvanzadasActivas.push(marcador);
                });
            }

            else if (modo === 'nse') {
                for (const zona in capasEstrategicas.nse) {
                    const datos = capasEstrategicas.nse[zona];
                    const circulo = L.circle(datos.coords, { color: datos.color, weight: 2, fillColor: datos.color, fillOpacity: 0.4, radius: 2800 }).addTo(mapaBase);
                    const popup = `<div style="text-align:center; min-width: 140px;"><strong style="color:${datos.color}; font-size:13px; text-transform:uppercase;">📍 ${zona}</strong><div style="font-size:1.2rem; font-weight:900; color:#f8fafc; margin-top:5px;">NSE: ${datos.perfil}</div></div>`;
                    circulo.bindTooltip(popup, { direction: "top", className: 'map-tooltip', offset: [0, -10] });
                    capasAvanzadasActivas.push(circulo);
                }
            }

            else if (modo === 'obras') {
                capasEstrategicas.obras.forEach(obra => {
                    const colorObra = obra.estado === "Finalizado" ? "#22c55e" : (obra.estado === "En ejecución" ? "#f59e0b" : "#94a3b8");
                    const marcador = L.circleMarker(obra.coords, { radius: 12, fillColor: colorObra, color: "#fff", weight: 2, opacity: 1, fillOpacity: 0.8 }).addTo(mapaBase);
                    const popup = `<div style="font-family:'Montserrat'; padding:5px; min-width:160px;"><h4 style="color:${colorObra}; margin-bottom:5px; font-size:13px; font-weight:800;">🚧 ${obra.nombre}</h4><p style="font-size:11px; margin:0; color:#f8fafc; text-transform:uppercase; font-weight:bold;">Estado: ${obra.estado}</p></div>`;
                    marcador.bindPopup(popup, { className: 'map-tooltip' });
                    capasAvanzadasActivas.push(marcador);
                });
            }

            else if (modo === 'corte') {
                for (const zona in capasEstrategicas.corteBoleta) {
                    const datos = capasEstrategicas.corteBoleta[zona];
                    const circulo = L.circleMarker(datos.coords, { radius: 25, color: datos.color, weight: 4, fillColor: datos.color, fillOpacity: 0.2 }).addTo(mapaBase);
                    const popup = `<div style="text-align:center; min-width: 160px;"><strong style="color:${datos.color}; font-size:13px; text-transform:uppercase;">📍 ${zona}</strong><div style="font-size:1.2rem; font-weight:900; color:#f8fafc; margin-top:5px;">${datos.dif}</div><div style="font-size:10px; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">Corte de Boleta</div></div>`;
                    circulo.bindTooltip(popup, { direction: "top", className: 'map-tooltip', offset: [0, -10] });
                    capasAvanzadasActivas.push(circulo);
                }
            }
        });
    });
});