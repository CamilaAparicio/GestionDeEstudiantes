import { useState } from 'react';
import { useEstudiantesPorCurso } from '../../hooks/useEstudiantesPorCurso';
import EstudianteCard from '../../components/estudianteCard';


const cursosValidos = ['Matemática', 'Historia', 'Ciencias', 'Arte'];

const Cursos = () => {
  const [curso, setCurso] = useState('');
  const { data, loading, error } = useEstudiantesPorCurso(curso);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Filtrar estudiantes por curso</h1>

      <label htmlFor="curso-select">Curso:</label>
      <select
        id="curso-select"
        value={curso}
        onChange={(e) => setCurso(e.target.value)}
        style={{ margin: '1rem 0', padding: '0.5rem' }}
      >
        <option value="">-- Elegí un curso --</option>
        {cursosValidos.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>

      {loading && <p>Cargando estudiantes...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && data.length === 0 && curso && (
        <p>No hay estudiantes en el curso "{curso}".</p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data.map(est => (
          <EstudianteCard key={est._id} estudiante={est} />
        ))}
      </div>
    </div>
  );
};

export default Cursos;
