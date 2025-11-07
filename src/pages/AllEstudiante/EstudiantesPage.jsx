import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function EstudiantesPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/estudiantes';
        }
        return location.pathname.includes(path);
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Gestión de Estudiantes
            </Typography>
            <Box sx={{ mb: 3, display: 'flex', gap: 2 }}>
                <Button 
                    variant={isActive('/') ? "contained" : "outlined"}
                    onClick={() => navigate('/estudiantes/lista')}
                >
                    Lista de Estudiantes
                </Button>
                <Button 
                    variant={isActive('/agregar') ? "contained" : "outlined"}
                    onClick={() => navigate('/estudiantes/agregar')}
                >
                    Buscar y Editar
                </Button>
            </Box>
            <Outlet />
        </Box>
    );
}
export default EstudiantesPage;