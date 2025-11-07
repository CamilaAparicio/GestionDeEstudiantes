import { Button, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import useDeleteEstudiante from '../../hooks/useDeleteEstudiante';

function BotonEliminar({ estudianteId, onEliminacionExitosa }) {
    const { deleteEstudiante, loading, error } = useDeleteEstudiante();

    const handleEliminar = () => {
        const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar al estudiante con ID: ${estudianteId}?`);
        
        if (confirmar) {
            deleteEstudiante(estudianteId, onEliminacionExitosa);
        }
    };

    return (
        <>
            <Button 
                variant="contained" 
                color="error" 
                onClick={handleEliminar} 
                disabled={loading}
                startIcon={loading ? <CircularProgress size={16} color="inherit" /> : <DeleteIcon />}
            >
                {loading ? 'Eliminando...' : 'Eliminar'}
            </Button>

            {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
        </>
    );
}

export default BotonEliminar;