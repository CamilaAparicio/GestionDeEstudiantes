import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress, Alert, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CamposFormulario from '../components/EstudiantesForms/CamposFormulario'; 
import useEstudianteById from '../hooks/useEstudianteById'; 
import useUpdateEstudiante from '../hooks/useUpdateEstudiante'; 


function EditarEstudiantePage() {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const { estudiante, loading: loadingFetch, error: errorFetch } = useEstudianteById(id);
    const { updateEstudiante, loading: loadingUpdate, success, error: errorUpdate } = useUpdateEstudiante();

    const [formData, setFormData] = useState(null); 

    useEffect(() => {
        if (estudiante) {
            setFormData(estudiante);
        }
    }, [estudiante]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateEstudiante(id, formData, () => {
            setTimeout(() => {
                navigate('/estudiantes'); 
            }, 1000);
        });
    };

    if (loadingFetch) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>;
    }

    if (errorFetch || !formData) {
        return <Alert severity="error" sx={{ mt: 4 }}>Error al cargar estudiante: {errorFetch || 'Datos no disponibles.'}</Alert>;
    }
    
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 3 }}>
                Editar Estudiante: {estudiante.nombre} {estudiante.apellido}
            </Typography>

            {errorUpdate && <Alert severity="error" sx={{ mb: 2 }}>Error al guardar: {errorUpdate}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>¡Estudiante actualizado con éxito!</Alert>}

            <CamposFormulario 
                formData={formData} 
                handleChange={handleChange} 
                loading={loadingUpdate} 
            />

            <Box sx={{ mt: 3, display: 'flex', gap: 2 }}>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    disabled={loadingUpdate}
                    endIcon={loadingUpdate ? <CircularProgress size={20} color="inherit" /> : <SaveIcon />}
                >
                    {loadingUpdate ? 'Guardando...' : 'Guardar Cambios'}
                </Button>
                
                <Button 
                    variant="outlined"
                    onClick={() => navigate('/estudiantes')}
                >
                    Cancelar
                </Button>
            </Box>
        </Box>
    );
}

export default EditarEstudiantePage;