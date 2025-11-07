const BASE_URL = import.meta.env.VITE_API_URL;  

export const getAllEstudiantes = async () => {
    const res = await fetch(`${BASE_URL}/estudiantes`);
    if (!res.ok) throw new Error("Error al obtener estudiantes");
    return res.json();
};

export const getEstudiantePorId = async (id) => {
    const res = await fetch(`${BASE_URL}/estudiantes/${id}`);
    if (!res.ok) throw new Error("No se encontro al estudiante");
    return res.json();
};

