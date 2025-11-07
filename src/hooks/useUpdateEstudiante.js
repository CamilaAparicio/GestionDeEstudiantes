import { useState } from 'react';
import { actualizarEstudiante } from '../services/actualizarEstudiante'; 

const useUpdateEstudiante = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const updateEstudiante = async (id, data, onSuccess) => {
        setLoading(true);
        setError(null);
        setSuccess(false);
        if (!id) {
            setError('Error: ID de estudiante no proporcionado.');
            setLoading(false);
            return;
        }

        try {
            const estudianteActualizado = await actualizarEstudiante(id, data);
            
            setSuccess(true);
            if (onSuccess) {
                onSuccess(estudianteActualizado); 
            }
            
        } catch (err) {
            console.error("Error al actualizar:", err);
            setError(err.message || 'Error desconocido al actualizar.');
        } finally {
            setLoading(false);
        }
    };

    return { updateEstudiante, loading, error, success };
};

export default useUpdateEstudiante;