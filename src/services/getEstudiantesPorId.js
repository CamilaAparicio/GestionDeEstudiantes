const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const getEstudiantePorId = async (id) => {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `${AUTH}`},
    });
    if (!res.ok) throw new Error("No se encontro al estudiante");
    return res.json();
};
