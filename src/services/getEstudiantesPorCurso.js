const BASE_URL = import.meta.env.VITE_API_URL;

export const getEstudiantesPorCurso = async (curso) => {
    const res = await fetch(`${BASE_URL}api/estudiantes?curso=${encodeURIComponent(curso)}`);
    if(!res.ok) throw new Error ("Error al obtener estudiantes por curso");
    return res.json();
}