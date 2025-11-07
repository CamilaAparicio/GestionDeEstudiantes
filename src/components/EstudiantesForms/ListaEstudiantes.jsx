import { useNavigate } from 'react-router-dom';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Typography, Box} from '@mui/material';
import useAllEstudiantes from '../../hooks/useAllEstudiantes';
import BotonEliminar from '../../pages/DeleteEstudiante/BotonEliminar';
import BotonEditar from '../../pages/EditEstudiantePage/BotonEditar';

function ListaEstudiantes() {
    const { estudiantes, setEstudiantes, loading, error } = useAllEstudiantes();
    const navigate = useNavigate(); 
    const columnas = ['ID', 'Nombre', 'Apellido', 'Email', 'Cursos', 'Acciones']; 

    const handleEliminacionExitosa = (idEliminado) => {
        setEstudiantes(prevEstudiantes => 
            prevEstudiantes.filter(est => est._id !== idEliminado)
        );
    };

    const handleEditarClick = (id) => {
        navigate(`/estudiantes/editar/${id}`);
    };

    if (loading) return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}><CircularProgress /></Box>
    );
    if (error) return (
        <Typography color="error" sx={{ mt: 4 }}>Error al cargar: {error}</Typography>
    );
    if (!estudiantes || estudiantes.length === 0) return (
        <Typography sx={{ mt: 4 }}>No hay estudiantes registrados.</Typography>
    );

    return (
        <TableContainer component={Paper} sx={{ mt: 4 }}>
            <Typography variant="h5" component="div" sx={{ p: 2 }}>
                Listado de Estudiantes
            </Typography>
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow sx={{ backgroundColor: '#bf53eaff' }}>
                        {columnas.map((col) => (<TableCell key={col}><b>{col}</b></TableCell>))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {estudiantes.map((row) => (
                        <TableRow key={row._id}>
                            <TableCell>{row._id}</TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.apellido}</TableCell>
                            <TableCell>{row.email}</TableCell>
                            <TableCell>
                                {row.cursos ? row.cursos.join(', ') : 'N/A'}
                            </TableCell>
                            
                            <TableCell sx={{ display: 'flex', gap: 1 }}>
                                <BotonEditar
                                    estudianteId={row._id}
                                    onEditClick={handleEditarClick} 
                                />
                                <BotonEliminar 
                                    estudianteId={row._id}
                                    onEliminacionExitosa={handleEliminacionExitosa}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ListaEstudiantes;