/*import React, { useState } from 'react';
import { useEstudiantesPorCurso } from '../../hooks/useEstudiantesPorCurso';
import FiltroFormulario from './FiltroFormulario';
import EstudiantesTabla from '../../components/EstudiantesTabla';

function Cursos() {
    const [inputCurso, setInputCurso] = useState(''); 
    const [cursoFiltro, setCursoFiltro] = useState(''); 

    const { 
        data: estudiantes,
        loading, 
        error 
    } = useEstudiantesPorCurso(cursoFiltro);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCursoFiltro(inputCurso); 
    };

    const handleClear = () => {
        setInputCurso(''); 
        setCursoFiltro('');
    };

    return (
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
          <h1>Buscador de Alumnos por Curso</h1>
            
            <FiltroFormulario 
                inputCurso={inputCurso}
                setInputCurso={setInputCurso}
                handleSubmit={handleSubmit}
                handleClear={handleClear}
                loading={loading}
            />

            <hr/>

    {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error al cargar: {error}</p>}
            
            {loading && cursoFiltro ? (
                <p> **Cargando estudiantes** del curso "{cursoFiltro}"...</p>
            ) : (
                <EstudiantesTabla
                    estudiantes={estudiantes} 
                    cursoFiltro={cursoFiltro} 
                />
            )}
        </div>
    );
}

export default Cursos;
*/