import { useState } from 'react';
import { Button, Box, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { crearEstudiante } from '../../services/crearEstudiante'; 
import CamposFormulario from './CamposFormulario';

const EstadoInicial = {
    nombre: '',
    apellido: '',
    email: '',
    cursos: [],
};

function FormAgregar() {
    const [formData, setFormData] = useState(EstadoInicial);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        setError(null);
        setSuccess(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const nuevoEstudiante = await crearEstudiante(formData);   
            setSuccess(true);
            setFormData(EstadoInicial);
            console.log('Estudiante creado:', nuevoEstudiante);

        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Error al crear.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>

         {success && <Alert severity="success" sx={{ mb: 2 }}>¡Estudiante creado!</Alert>}
         {error && <Alert severity="error" sx={{ mb: 2 }}>Error: {error}</Alert>}
            
    <CamposFormulario formData={formData} handleChange={handleChange} loading={loading}/>

    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="submit" variant="contained" color="primary"  endIcon={loading ?           <CircularProgress size={20} color="inherit" /> : <SendIcon />} disabled={loading} >
                    {loading ? 'Guardando...' : 'Crear Estudiante'}
        </Button>
            </Box>
        </Box>
    );
}
export default FormAgregar;
