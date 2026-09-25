// =========================================================
// MOTOR VISUAL: RENDERIZADO DE POLÍGONOS EXACTOS
// =========================================================

let capaPoligonosActiva = null;

document.addEventListener('DOMContentLoaded', () => {
    
    // Escuchamos los cambios en los botones de capas
    document.querySelectorAll('input[name="tipoCapa"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            const modo = e.target.value;
            const añoActual = document.getElementById('yearSelect').value;
            const dataElectoral = db[añoActual];

            // Si hay un polígono dibujado, lo borramos antes de cambiar
            if (capaPoligonosActiva) {
                mapaBase.removeLayer(capaPoligonosActiva);
                capaPoligonosActiva = null;
            }

            // Si el usuario eligió ver los polígonos exactos
            if (modo === 'poligonos') {
                
                // Apagamos los círculos viejos de app.js si están prendidos
                if (typeof capasActivasZonas !== 'undefined') capasActivasZonas.forEach(c => mapaBase.removeLayer(c));
                if (typeof capasActivasMesas !== 'undefined') capasActivasMesas.forEach(c => mapaBase.removeLayer(c));
                if (typeof capasAvanzadasActivas !== 'undefined') capasAvanzadasActivas.forEach(c => mapaBase.removeLayer(c));

                // Dibujamos la capa GeoJSON
                capaPoligonosActiva = L.geoJSON(geoCircuitosLaCosta, {
                    
                    // ESTILO VISUAL DEL POLÍGONO
                    style: function (feature) {
                        const nombreCircuito = feature.properties.id;
                        // Buscamos quién ganó acá en la base de datos
                        const infoCircuito = dataElectoral.circuitos.find(c => c.id === nombreCircuito);
                        const colorGanador = infoCircuito ? infoCircuito.ganador : "#334155";

                        return {
                            color: colorGanador,      // Color del borde
                            weight: 2,                // Grosor del borde
                            opacity: 0.8,             // Opacidad del borde
                            fillColor: colorGanador,  // Color de relleno
                            fillOpacity: 0.15,        // Capa suave y translúcida (Glass)
                            dashArray: '4'            // Borde punteado técnico
                        };
                    },

                    // INTERACTIVIDAD (Hover y Popups)
                    onEachFeature: function (feature, layer) {
                        const nombreCircuito = feature.properties.id;
                        const infoCircuito = dataElectoral.circuitos.find(c => c.id === nombreCircuito);
                        const textoDatos = infoCircuito ? infoCircuito.info : "Sin datos";
                        const colorGanador = infoCircuito ? infoCircuito.ganador : "#fff";

                        // Efecto al pasar el mouse por encima del circuito
                        layer.on({
                            mouseover: function (e) {
                                const layer = e.target;
                                layer.setStyle({ fillOpacity: 0.4, weight: 3 }); // Se ilumina
                            },
                            mouseout: function (e) {
                                capaPoligonosActiva.resetStyle(e.target); // Vuelve a la normalidad
                            }
                        });

                        // El cartelito flotante
                        const popupHTML = `
                            <div style="min-width: 160px;">
                                <strong style="color:${colorGanador}; font-size:14px; text-transform:uppercase;">📍 ${nombreCircuito}</strong>
                                <div style="margin-top: 8px; font-size:12px; color:#94a3b8; font-weight:600;">${textoDatos}</div>
                            </div>
                        `;
                        layer.bindTooltip(popupHTML, { direction: "center", className: 'map-tooltip', sticky: true });
                    }
                }).addTo(mapaBase);
                
                // Ajustamos la cámara para que el polígono encuadre perfecto
                mapaBase.fitBounds(capaPoligonosActiva.getBounds(), { padding: [20, 20], animate: true, duration: 1 });
            }
        });
    });

    // Actualizar color de los polígonos si cambiamos de año mientras la capa está activa
    document.getElementById('yearSelect').addEventListener('change', () => {
        if (document.getElementById('capa-poligonos') && document.getElementById('capa-poligonos').checked) {
            // Disparamos el evento manualmente para que repinte los polígonos con el año nuevo
            document.getElementById('capa-poligonos').dispatchEvent(new Event('change'));
        }
    });
});