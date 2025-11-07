const BASE_URL = import.meta.env.VITE_API_URL;

export const eliminarEstudiante = async (id) => {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`, {
        method: "DELETE",
         headers: {
        "content-type": "application/json"},
    });
    if (!res.ok) throw new Error("Error al eliminar estudiantee");
}