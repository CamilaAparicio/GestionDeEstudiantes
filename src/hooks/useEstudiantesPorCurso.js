import { useState, useEffect } from 'react';
import { getEstudiantesPorCurso } from '../services/getEstudiantesPorCurso';

const useEstudiantesPorCurso = (curso) => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!curso || curso.trim() === '') {
            setEstudiantes([]);
            return;
        }
        const fetchEstudiantes = async () => {
            setLoading(true);
            setError(null);

            try {
                const data = await getEstudiantesPorCurso(curso);
                setEstudiantes(data);
            } catch (err) {
                console.error("Fallo al obtener estudiantes por curso:", err);
                setError(err.message || `No se pudo obtener estudiantes para el curso: ${curso}`);
                setEstudiantes([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEstudiantes();
    }, [curso]);

    return { estudiantes, loading, error };
};

export default useEstudiantesPorCurso;