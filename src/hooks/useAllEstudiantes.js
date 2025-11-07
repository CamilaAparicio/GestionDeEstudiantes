import { useState, useEffect } from 'react';
import { getAllEstudiantes } from '../services/getAllEstudiantes'; 

const useAllEstudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const allEstudiantes = async () => {
            setLoading(true);
            setError(null);

            try {  
             const data = await getAllEstudiantes(); 
             setEstudiantes(data);
            } catch (err) {
                console.error("Error al cargar estudiantes:", err);
                setError(err.message || 'Error al cargar los datos.');
            } finally {
                setLoading(false);
            }
        };
        allEstudiantes();
    }, []);

    return { estudiantes, setEstudiantes, loading, error };
};

export default useAllEstudiantes;