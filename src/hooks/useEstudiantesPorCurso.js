import { useEffect, useState } from "react";
import { getEstudiantesPorCurso } from "../services/getEstudiantesPorCurso";

export const useEstudiantesPorCurso = (curso) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!curso || curso.trim() === "") {
      setData([]); 
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const estudiantes = await getEstudiantesPorCurso(curso);
        setData(estudiantes);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [curso]);

  return { data, loading, error };
};