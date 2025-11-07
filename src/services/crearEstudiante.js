const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const crearEstudiante = async (data) => {
    const res = await fetch(`${BASE_URL}/estudiantes`,{
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `${AUTH}`},
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al crear estudiante");
    return res.json();
}