import React, { useState } from 'react';
import { Box, TextField, Typography, CircularProgress, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useEstudiantesPorCurso from '../../hooks/useEstudiantesPorCurso';
import ListaEstudiantesFil from './ListaEstudiantesFil';

function EstudiantesPorCursoPage() {
    const [inputValue, setInputValue] = useState('');
    const [cursoBuscado, setCursoBuscado] = useState('');
    const { estudiantes, loading, error } = useEstudiantesPorCurso(cursoBuscado); 

    const handleInputChange = (e) => {
        setInputValue(e.target.value); 
    };
    const handleBuscarClick = () => {
        setCursoBuscado(inputValue.trim()); 
    };
    
    return (
        <Box sx={{ p: 3 }}>
         <Typography variant="h5" gutterBottom>
                Búsqueda de Estudiantes por Curso
         </Typography>
            
     <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-end', mb: 3 }}>
         <TextField label="Nombre del Curso" value={inputValue}  onChange={handleInputChange} fullWidth margin="normal" variant="outlined" helperText="Escriba el nombre exacto del curso para realizar la búsqueda."
                />
                <Button variant="contained" onClick={handleBuscarClick} disabled={!inputValue.trim() || loading} startIcon={<SearchIcon />} sx={{ height: 56 }} >
                    Buscar
                </Button>
            </Box>
            <Box sx={{ mt: 2 }}>
                {loading && (
                    <Box display="flex" alignItems="center"><CircularProgress size={20} sx={{ mr: 1 }} /> Filtrando...</Box>
                )}

                {error && (
                    <Typography color="error">{error}</Typography>
                )}
                
                {!loading && !error && cursoBuscado && (
                    <ListaEstudiantesFil estudiantes={estudiantes} curso={cursoBuscado} />
                )}           
         {!cursoBuscado && (<Typography color="textSecondary">Ingrese un curso y presione Buscar.</Typography> )}
            </Box>
        </Box>
    );
}

export default EstudiantesPorCursoPage;