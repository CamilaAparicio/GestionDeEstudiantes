const BASE_URL = import.meta.env.VITE_API_URL;
const AUTH = import.meta.env.VITE_AUTH;

export const getEstudiantesPorCurso = async (curso) => {
    const res = await fetch(`${BASE_URL}/api/estudiantes?curso=${encodeURIComponent(curso)}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `${AUTH}`},
    });
    if(!res.ok) throw new Error ("Error al obtener estudiantes por curso");
    return res.json();
}