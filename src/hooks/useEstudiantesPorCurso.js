import { useEffect, useState } from "react";
import { getEstudiantesPorCurso } from "../services/getEstudiantesPorCurso";

export const useEstudiantesPorCurso = (curso) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!curso) {
            setData([]);
            setLoading(false);
            setError(null);
            return;
        }
        let isCancelled = false;
        
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
        const estudiantes = await getEstudiantesPorCurso(curso); 
                
          if (!isCancelled) {
                    setData(estudiantes);
                }
          } catch (err) {

          if (!isCancelled) {
                    setError(err.message || "Error desconocido al cargar estudiantes.");
                    setData([]); 
                  }
            } finally {
          if (!isCancelled) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [curso]);
    return { data, loading, error };
};