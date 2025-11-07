import { Container, Typography, Box } from '@mui/material';
import FormAgregar from '../../components/EstudiantesForms/FormAgregar';

function AddEstudiantePage() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Agregar Nuevo Estudiante
        </Typography>
            <FormAgregar />
      </Box>
    </Container>
  );
}

export default AddEstudiantePage;