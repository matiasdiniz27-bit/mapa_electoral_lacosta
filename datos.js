const db = {
    "2019": {
        resumen: [
            { id: "pj", nombre: "Frente de Todos", pct: 49.59, votos: 25742, color: "var(--color-pj)" },
            { id: "jxc", nombre: "Juntos por el Cambio", pct: 33.52, votos: 17401, color: "var(--color-jxc)" },
            { id: "otros", nombre: "A Toda Costa", pct: 10.04, votos: 5213, color: "var(--text-muted)" }
        ],
        hcd: ["FDT: 5 Concejales", "JxC: 4 Concejales"],
        circuitos: [
            { id: "San Clemente", ganador: "var(--color-pj)", info: "FDT: 4.258 | JxC: 2.870" },
            { id: "Las Toninas", ganador: "var(--color-pj)", info: "FDT: 1.740 | JxC: 1.163" },
            { id: "Santa Teresita", ganador: "var(--color-pj)", info: "FDT: 5.442 | JxC: 3.672" },
            { id: "Mar del Tuyú", ganador: "var(--color-pj)", info: "FDT: 3.078 | JxC: 2.233" },
            { id: "San Bernardo / Lucila", ganador: "var(--color-pj)", info: "FDT: 3.524 | JxC: 2.915" },
            { id: "Mar de Ajó", ganador: "var(--color-pj)", info: "FDT: 6.604 | JxC: 4.095" }
        ],
        analisis: `<h3>Apogeo Bicoalicionista</h3><p>Victoria aplastante del peronismo en todos los circuitos territoriales.</p>`
    },
    "2021": {
        resumen: [
            { id: "jxc", nombre: "Alianza Juntos", pct: 42.58, votos: 21338, color: "var(--color-jxc)" },
            { id: "pj", nombre: "Frente de Todos", pct: 33.33, votos: 16701, color: "var(--color-pj)" },
            { id: "lla", nombre: "Avanza Libertad", pct: 6.03, votos: 3021, color: "var(--color-lla)" }
        ],
        hcd: ["Juntos: 6 Concejales", "FDT: 3 Concejales"],
        circuitos: [
            { id: "San Clemente", ganador: "var(--color-jxc)", info: "Juntos: 3.500 | FDT: 2.892" },
            { id: "Las Toninas", ganador: "var(--color-jxc)", info: "Juntos: 1.451 | FDT: 1.173" },
            { id: "Santa Teresita", ganador: "var(--color-jxc)", info: "Juntos: 4.432 | FDT: 3.128" },
            { id: "Mar del Tuyú", ganador: "var(--color-jxc)", info: "Juntos: 2.760 | FDT: 1.925" },
            { id: "San Bernardo / Lucila", ganador: "var(--color-jxc)", info: "Juntos: 3.386 | FDT: 2.290" },
            { id: "Mar de Ajó", ganador: "var(--color-jxc)", info: "Juntos: 5.235 | FDT: 4.304" }
        ],
        analisis: `<h3>Ola Amarilla</h3><p>Voto castigo que le permitió a JxC ganar en todos los circuitos por primera vez.</p>`
    },
    "2023": {
        resumen: [
            { id: "pj", nombre: "Unión por la Patria", pct: 36.68, votos: 20461, color: "var(--color-pj)" },
            { id: "lla", nombre: "La Libertad Avanza", pct: 35.55, votos: 19831, color: "var(--color-lla)" },
            { id: "jxc", nombre: "Juntos por el Cambio", pct: 23.66, votos: 13196, color: "var(--color-jxc)" }
        ],
        hcd: ["UP: 4 Concejales", "LLA: 3 Concejales", "JxC: 2 Concejales"],
        circuitos: [
            { id: "San Clemente", ganador: "var(--color-pj)", info: "UP: 3.355 | JxC: 3.351 | LLA: 1.991" },
            { id: "Las Toninas", ganador: "var(--color-pj)", info: "UP: 1.498 | JxC: 1.355 | LLA: 1.002" },
            { id: "Santa Teresita", ganador: "var(--color-jxc)", info: "JxC: 4.385 | UP: 3.898 | LLA: 2.584" },
            { id: "Mar del Tuyú", ganador: "var(--color-jxc)", info: "JxC: 2.707 | UP: 2.568 | LLA: 1.778" },
            { id: "San Bernardo / Lucila", ganador: "var(--color-jxc)", info: "JxC: 3.007 | UP: 2.741 | LLA: 2.000" },
            { id: "Mar de Ajó", ganador: "var(--color-pj)", info: "UP: 5.210 | JxC: 4.419 | LLA: 3.448" }
        ],
        analisis: `<h3>Tercios Asimétricos</h3><p>El Peronismo retiene la intendencia gracias a la tracción de Mar de Ajó.</p>`
    },
    "2025": {
        resumen: [
            { id: "pj", nombre: "Fuerza Patria", pct: 36.58, votos: 17516, color: "var(--color-pj)" },
            { id: "lla", nombre: "La Libertad Avanza", pct: 24.44, votos: 11704, color: "var(--color-lla)" },
            { id: "jxc", nombre: "Somos Buenos Aires", pct: 19.02, votos: 9106, color: "var(--color-jxc)" }
        ],
        hcd: ["Fuerza Patria: 4", "LLA: 3", "Somos BA: 2"],
        circuitos: [
            { id: "San Clemente", ganador: "var(--color-pj)", info: "FP: 35.97% | LLA: 23.24% | SBA: 20.65%" },
            { id: "Las Toninas", ganador: "var(--color-pj)", info: "FP: 38.36% | LLA: 22.86% | SBA: 18.94%" },
            { id: "Santa Teresita", ganador: "var(--color-pj)", info: "FP: 35.24% | SBA: 23.32% | LLA: 21.79%" },
            { id: "Mar del Tuyú", ganador: "var(--color-pj)", info: "FP: 34.48% | LLA: 25.78% | SBA: 20.52%" },
            { id: "San Bernardo / Lucila", ganador: "var(--color-pj)", info: "FP: 36.31% | LLA: 29.05% | SBA: 16.67%" },
            { id: "Mar de Ajó", ganador: "var(--color-pj)", info: "FP: 39.04% | LLA: 25.33% | SBA: 14.81%" }
        ],
        analisis: `<h3>Consolidación del Oficialismo</h3><p>Recuperación territorial total pintando todo el mapa de azul nuevamente.</p>`
    }
};

const capasEstrategicas = {
    ausentismo: {
        "San Clemente": { porcentaje: 32.5, nivel: "alto", radio: 2500, coords: [-36.35, -56.71] },
        "Las Toninas": { porcentaje: 35.1, nivel: "critico", radio: 2000, coords: [-36.48, -56.69] },
        "Santa Teresita": { porcentaje: 28.4, nivel: "medio", radio: 2200, coords: [-36.54, -56.70] },
        "Mar del Tuyú": { porcentaje: 30.2, nivel: "alto", radio: 2200, coords: [-36.57, -56.69] },
        "San Bernardo / Lucila": { porcentaje: 25.8, nivel: "bajo", radio: 2500, coords: [-36.68, -56.67] },
        "Mar de Ajó": { porcentaje: 34.7, nivel: "critico", radio: 3000, coords: [-36.72, -56.67] }
    },
    localesPartidarios: [
        { nombre: "Ateneo Fuerza Patria Central", coords: [-36.538, -56.702], partido: "Fuerza Patria", color: "#0ea5e9" },
        { nombre: "Sede La Libertad Avanza", coords: [-36.722, -56.678], partido: "LLA", color: "#8b5cf6" },
        { nombre: "Comité UCR / Somos BA", coords: [-36.352, -56.712], partido: "Somos BA", color: "#eab308" }
    ],
    nse: {
        "San Clemente": { perfil: "Medio-Bajo", color: "#64748b", coords: [-36.35, -56.71] },
        "Santa Teresita": { perfil: "Medio", color: "#3b82f6", coords: [-36.54, -56.70] },
        "Costa del Este": { perfil: "Alto", color: "#10b981", coords: [-36.61, -56.69] }
    },
    obras: [
        { nombre: "Hospital Municipal", estado: "Finalizado", coords: [-36.545, -56.710], color: "#22c55e" },
        { nombre: "Asfalto Av. Libertador", estado: "En ejecución", coords: [-36.715, -56.680], color: "#f59e0b" }
    ],
    corteBoleta: {
        "San Clemente": { dif: "+12% Local", color: "#22c55e", coords: [-36.35, -56.71] },
        "Mar de Ajó": { dif: "-5% Local", color: "#ef4444", coords: [-36.72, -56.67] }
    }
};

const geoCircuitosLaCosta = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "id": "San Clemente" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.760, -36.280], [-56.700, -36.280], [-56.690, -36.400], [-56.760, -36.400], [-56.760, -36.280]]] } },
        { "type": "Feature", "properties": { "id": "Las Toninas" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.720, -36.450], [-56.670, -36.450], [-56.680, -36.500], [-56.720, -36.500], [-56.720, -36.450]]] } },
        { "type": "Feature", "properties": { "id": "Santa Teresita" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.720, -36.510], [-56.685, -36.510], [-56.695, -36.555], [-56.730, -36.555], [-56.720, -36.510]]] } },
        { "type": "Feature", "properties": { "id": "Mar del Tuyú" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.730, -36.555], [-56.695, -36.555], [-56.705, -36.600], [-56.740, -36.600], [-56.730, -36.555]]] } },
        { "type": "Feature", "properties": { "id": "San Bernardo / Lucila" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.715, -36.630], [-56.660, -36.630], [-56.670, -36.700], [-56.725, -36.700], [-56.715, -36.630]]] } },
        { "type": "Feature", "properties": { "id": "Mar de Ajó" }, "geometry": { "type": "Polygon", "coordinates": [[[-56.725, -36.700], [-56.670, -36.700], [-56.680, -36.770], [-56.740, -36.770], [-56.725, -36.700]]] } }
    ]
};