const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const eliminarEstudiante = async (id) => {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`, {
        method: "DELETE",
         headers: {
        "content-type": "application/json", Authorization: `${AUTH}`},
    });
    if (!res.ok) throw new Error("Error al eliminar estudiantee");
}