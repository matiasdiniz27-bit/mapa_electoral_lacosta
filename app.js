const mapaBase = L.map('map', { zoomControl: false }).setView([-36.52, -56.68], 11);
L.control.zoom({ position: 'bottomright' }).addTo(mapaBase);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16 }).addTo(mapaBase);

let capasActivas = [];
let graficoTorta, graficoBarras, graficoLineas;
Chart.defaults.color = "#94a3b8"; Chart.defaults.font.family = "'Montserrat'";

function inicializarGraficos() {
    graficoLineas = new Chart(document.getElementById('grafico-lineas').getContext('2d'), { type: 'line', data: { labels: ["2019", "2021", "2023", "2025"], datasets: [ { label: "Peronismo", data: [49.59, 33.33, 36.68, 36.58], borderColor: "#38bdf8", tension: 0.4 }, { label: "Juntos", data: [33.52, 42.58, 23.66, 19.02], borderColor: "#facc15", tension: 0.4 }, { label: "Libertarios", data: [null, 6.03, 35.55, 24.44], borderColor: "#a78bfa", tension: 0.4 } ] }, options: { responsive: true, maintainAspectRatio: false } });
    graficoTorta = new Chart(document.getElementById('grafico-torta').getContext('2d'), { type: 'doughnut', data: { labels: [], datasets: [{ data: [] }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '75%' } });
    graficoBarras = new Chart(document.getElementById('grafico-barras').getContext('2d'), { type: 'bar', data: { labels: [], datasets: [{ data: [] }] }, options: { responsive: true, maintainAspectRatio: false } });
}

function cambiarPestaña(id) {
    document.querySelectorAll('.btn-pestaña, .contenido-pestaña').forEach(el => el.classList.remove('activo'));
    event.currentTarget.classList.add('activo'); document.getElementById(id).classList.add('activo');
}

function toggleDesglose(index) {
    const d = document.getElementById(`desglose-${index}`);
    const estabaAbierto = d.style.display === "block";
    document.querySelectorAll('.tarjeta-desglose').forEach(el => el.style.display = "none");
    if (!estabaAbierto) d.style.display = "block";
}

function renderizarDashboardYAño() {
    const año = document.getElementById('yearSelect').value;
    const dataElectoral = db[año];
    document.getElementById('lbl-año-resultados').innerText = año;
    
    const cont = document.getElementById('lista-resultados-oficiales');
    cont.innerHTML = '';
    dataElectoral.resumen.forEach((p, index) => {
        let desglose = '';
        dataElectoral.circuitos.forEach(c => desglose += `<div class="circuito-fila"><span class="circuito-nombre">${c.id}</span><span class="circuito-datos">${c.info}</span></div>`);
        cont.innerHTML += `<div class="tarjeta-partido"><div class="tarjeta-cabecera" style="border-left-color: ${p.color}" onclick="toggleDesglose(${index})"><div><div class="nombre" style="color:${p.color}">${p.nombre} <span>▼</span></div><div class="votos">${p.votos.toLocaleString()} votos</div></div><div class="pct">${p.pct}%</div></div><div class="tarjeta-desglose" id="desglose-${index}">${desglose}</div></div>`;
    });

    document.getElementById('lista-bancas').innerHTML = dataElectoral.hcd.map(b => `<li>${b}</li>`).join('');
    document.getElementById('texto-analisis-politico').innerHTML = dataElectoral.analisis;

    graficoTorta.data.labels = dataElectoral.resumen.map(p => p.nombre);
    graficoTorta.data.datasets[0].data = dataElectoral.resumen.map(p => p.pct);
    graficoTorta.data.datasets[0].backgroundColor = dataElectoral.resumen.map(p => p.color);
    graficoTorta.update();

    // Actualizar el mapa según la capa seleccionada
    actualizarCapaMapa();
}

function actualizarCapaMapa() {
    capasActivas.forEach(c => mapaBase.removeLayer(c)); capasActivas = [];
    const modo = document.querySelector('input[name="tipoCapa"]:checked').value;
    const año = document.getElementById('yearSelect').value;
    
    if (modo === 'poligonos') {
        const capaP = L.geoJSON(geoCircuitosLaCosta, {
            style: function(feature) {
                const info = db[año].circuitos.find(c => c.id === feature.properties.id);
                const color = info ? info.ganador : "#555";
                return { color: color, weight: 2, fillColor: color, fillOpacity: 0.25, dashArray: '4' };
            },
            onEachFeature: function(feature, layer) {
                const info = db[año].circuitos.find(c => c.id === feature.properties.id);
                const color = info ? info.ganador : "#fff";
                layer.bindTooltip(`<div><strong style="color:${color}">${feature.properties.id}</strong><br>${info ? info.info : ''}</div>`, {className: 'map-tooltip'});
                layer.on('mouseover', () => layer.setStyle({fillOpacity: 0.5})).on('mouseout', () => capaP.resetStyle(layer));
            }
        }).addTo(mapaBase);
        capasActivas.push(capaP);
    } 
    else if (modo === 'zonas') {
        db[año].circuitos.forEach(c => {
            const coords = capasEstrategicas.ausentismo[c.id]?.coords;
            if(coords) {
                const circ = L.circle(coords, { color: c.ganador, fillColor: c.ganador, fillOpacity: 0.2, radius: 2500 }).addTo(mapaBase);
                circ.bindTooltip(`<strong>${c.id}</strong><br>${c.info}`, {className: 'map-tooltip'});
                capasActivas.push(circ);
            }
        });
    }
    else if (modo === 'ausentismo') {
        for (const z in capasEstrategicas.ausentismo) {
            const d = capasEstrategicas.ausentismo[z];
            const c = d.porcentaje > 33 ? "#ef4444" : "#f59e0b";
            const circ = L.circle(d.coords, { color: c, fillColor: c, fillOpacity: 0.4, radius: d.radio }).addTo(mapaBase);
            circ.bindTooltip(`<strong>${z}</strong><br>Ausentismo: ${d.porcentaje}%`, {className: 'map-tooltip'});
            capasActivas.push(circ);
        }
    }
    else if (modo === 'locales' || modo === 'obras') {
        const data = modo === 'locales' ? capasEstrategicas.localesPartidarios : capasEstrategicas.obras;
        data.forEach(item => {
            const marker = L.circleMarker(item.coords, { radius: 10, fillColor: item.color, color: "#fff", weight: 2, fillOpacity: 1 }).addTo(mapaBase);
            marker.bindTooltip(`<strong>${item.nombre}</strong>`, {className: 'map-tooltip'});
            capasActivas.push(marker);
        });
    }
}

document.querySelectorAll('input[name="tipoCapa"]').forEach(r => r.addEventListener('change', actualizarCapaMapa));
document.getElementById('yearSelect').addEventListener('change', renderizarDashboardYAño);

window.onload = () => { 
    inicializarGraficos(); 
    renderizarDashboardYAño(); 
};