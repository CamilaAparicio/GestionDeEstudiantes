const BASE_URL = import.meta.env.VITE_API_URL;

export const actualizarEstudiante = async (id, data) => {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`, {
        method: "PUT",
        headers: { "Content_Type": "application/json"},
        body:JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Error al actualizar estudiante");
    return res.json();
}