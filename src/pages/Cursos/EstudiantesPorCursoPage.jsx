import React, { useState } from 'react';
import { Box, TextField, Typography, CircularProgress } from '@mui/material';
import useEstudiantesPorCurso from '../../hooks/useEstudiantesPorCurso';
import ListaEstudiantesFil from './ListaEstudiantesFil';

function EstudiantesPorCursoPage() {
    const [cursoBuscado, setCursoBuscado] = useState('');
    const { estudiantes, loading, error } = useEstudiantesPorCurso(cursoBuscado); 
    const handleInputChange = (e) => {
        setCursoBuscado(e.target.value); 
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Búsqueda de Estudiantes por Curso
            </Typography>
 
            <TextField label="Nombre del Curso" value={cursoBuscado} onChange={handleInputChange} fullWidth margin="normal" variant="outlined" helperText="Escriba el curso."/>
   
            <Box sx={{ mt: 4 }}>
                {loading && (
                    <Box display="flex" alignItems="center"><CircularProgress size={20} sx={{ mr: 1 }} /> Filtrando...</Box>
                )}

        {error && (<Typography color="error">{error}</Typography>)}
                {!loading && !error && cursoBuscado && estudiantes.length > 0 && (
                    <ListaEstudiantesFil estudiantes={estudiantes} curso={cursoBuscado} />
                )}

                {!loading && !error && cursoBuscado && estudiantes.length === 0 && (
                     <Typography color="textSecondary">No se encontraron estudiantes en el curso: {cursoBuscado}</Typography>
                )}
                
                {!cursoBuscado && (
                     <Typography color="textSecondary">Ingrese un curso para comenzar la búsqueda.</Typography>
                )}
            </Box>
        </Box>
    );
}

export default EstudiantesPorCursoPage;