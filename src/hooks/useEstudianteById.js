import { useState, useEffect } from 'react';
import { getEstudianteById } from '../services/getEstudiantesPorId'; 

const useEstudianteById = (estudianteId) => {
    const [estudiante, setEstudiante] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!estudianteId) {
            setError("ID de estudiante no válido o faltante.");
            setLoading(false);
            return;
        }

        const editEstudiante = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const data = await getEstudianteById(estudianteId);
                setEstudiante(data);
            } catch (err) {
                console.error("Fallo al obtener estudiante:", err);
                setError(err.message || 'Error al cargar los datos del estudiante.');
                setEstudiante(null);
            } finally {
                setLoading(false);
            }
        };

        editEstudiante();
        
    }, [estudianteId]);
    return { estudiante, setEstudiante, loading, error };
};

export default useEstudianteById;