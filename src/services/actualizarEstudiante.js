const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const actualizarEstudiante = async (id, data) => {
    const res = await fetch(`${BASE_URL}/api/estudiantes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json", Authorization: `${AUTH}`},
        body:JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actualizar estudiante");
    return res.json();
}