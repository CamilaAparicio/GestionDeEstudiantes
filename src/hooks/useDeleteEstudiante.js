import React, { useState } from 'react';
import { eliminarEstudiante } from '../services/eliminarEstudiante';

const useDeleteEstudiante = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteEstudiante = async (id, onSuccess) => {
        if (!id) {
            setError('Error: ID de estudiante no proporcionado.');
            return; 
        }
        setLoading(true);
        setError(null);

        try {
            await eliminarEstudiante(id);
            
            if (onSuccess) {
                onSuccess(id);
            }
            
        } catch (err) {
            console.error("Error al eliminar:", err);
            setError(err.message || 'Error desconocido al eliminar.');
        } finally {
            setLoading(false);
        }
    };

    return { deleteEstudiante, loading, error };
};

export default useDeleteEstudiante;