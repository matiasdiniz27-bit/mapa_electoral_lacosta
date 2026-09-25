// =========================================================
// MÓDULO EXTRA: DATOS TERRITORIALES Y ESTRATÉGICOS LA COSTA
// =========================================================

const capasEstrategicas = {
    
    // 1. Mapa de Calor: Ausentismo (Bolsas de votos a recuperar)
    ausentismo: {
        "San Clemente": { porcentaje: 32.5, nivel: "alto", radio: 2500, coords: [-36.35, -56.71] },
        "Las Toninas": { porcentaje: 35.1, nivel: "critico", radio: 2000, coords: [-36.48, -56.69] },
        "Santa Teresita": { porcentaje: 28.4, nivel: "medio", radio: 2200, coords: [-36.54, -56.70] },
        "Mar del Tuyú": { porcentaje: 30.2, nivel: "alto", radio: 2200, coords: [-36.57, -56.69] },
        "San Bernardo / Lucila": { porcentaje: 25.8, nivel: "bajo", radio: 2500, coords: [-36.68, -56.67] },
        "Mar de Ajó": { porcentaje: 34.7, nivel: "critico", radio: 3000, coords: [-36.72, -56.67] }
    },
    
    // 2. Despliegue Territorial: Locales y Sedes Partidarias
    localesPartidarios: [
        { nombre: "Ateneo Fuerza Patria Central", coords: [-36.538, -56.702], partido: "Fuerza Patria", color: "#0ea5e9" },
        { nombre: "Unidad Básica Mar de Ajó", coords: [-36.725, -56.672], partido: "Fuerza Patria", color: "#0ea5e9" },
        { nombre: "Sede La Libertad Avanza", coords: [-36.722, -56.678], partido: "LLA", color: "#8b5cf6" },
        { nombre: "Local Avanza San Clemente", coords: [-36.355, -56.710], partido: "LLA", color: "#8b5cf6" },
        { nombre: "Comité UCR / Somos BA", coords: [-36.352, -56.712], partido: "Somos BA", color: "#eab308" },
        { nombre: "Sede PRO / Somos BA", coords: [-36.685, -56.670], partido: "Somos BA", color: "#eab308" }
    ],

    // 3. Segmentación: Nivel Socioeconómico (NSE predominante por zona)
    nse: {
        "San Clemente": { perfil: "Medio-Bajo", color: "#64748b", coords: [-36.35, -56.71] },
        "Las Toninas": { perfil: "Medio-Bajo", color: "#64748b", coords: [-36.48, -56.69] },
        "Santa Teresita": { perfil: "Medio", color: "#3b82f6", coords: [-36.54, -56.70] },
        "Costa del Este": { perfil: "Alto", color: "#10b981", coords: [-36.61, -56.69] }, // Agregado foco de alto NSE
        "San Bernardo": { perfil: "Medio-Alto", color: "#06b6d4", coords: [-36.68, -56.67] },
        "Mar de Ajó": { perfil: "Medio-Bajo", color: "#64748b", coords: [-36.72, -56.67] },
        "Costa Esmeralda": { perfil: "Alto Exclusivo", color: "#10b981", coords: [-36.88, -56.65] } // Agregado foco de alto NSE
    },

    // 4. Gestión: Obras Públicas Clave (Para cruzar si la obra trae votos)
    obras: [
        { nombre: "Hospital Municipal Santa Teresita", estado: "Finalizado", coords: [-36.545, -56.710] },
        { nombre: "Asfalto Av. Libertador", estado: "En ejecución", coords: [-36.715, -56.680] },
        { nombre: "Red de Agua Potable", estado: "Proyectado", coords: [-36.485, -56.698] },
        { nombre: "Polideportivo Villa Clelia", estado: "Finalizado", coords: [-36.735, -56.675] }
    ],

    // 5. Fidelidad: Corte de Boleta (Diferencia de votos entre Intendente y Presidente 2023)
    corteBoleta: {
        "San Clemente": { dif: "+12% Local", color: "#22c55e", coords: [-36.35, -56.71] },
        "Santa Teresita": { dif: "+18% Local", color: "#22c55e", coords: [-36.54, -56.70] },
        "Mar de Ajó": { dif: "-5% Local (Arrastre Nac)", color: "#ef4444", coords: [-36.72, -56.67] }
    }
};