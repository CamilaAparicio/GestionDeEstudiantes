import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography} from '@mui/material';

function ListaEstudiantesFil({ estudiantes, curso }) { 
    if (!estudiantes || estudiantes.length === 0) {
        return (
             <Typography sx={{ mt: 2 }} color="textSecondary">
                No se encontraron estudiantes para el curso: {curso}.
            </Typography>
        );
    }
    
    const columnas = ['ID', 'Nombre', 'Apellido', 'Email', 'Cursos']; 

    return (
      <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Typography variant="h6" component="div" sx={{ p: 2 }}>
             Estudiantes del curso: <b>{curso}</b>
      </Typography>
         <Table sx={{ minWidth: 650 }}>
         <TableHead>
             <TableRow sx={{ backgroundColor: '#bf53eaff' }}>
     {columnas.map((col) => (
        <TableCell key={col}><b>{col}</b></TableCell>
))}
        </TableRow>
        </TableHead>
        <TableBody>
     {estudiantes.map((row) => (
          <TableRow key={row._id}>
          <TableCell>{row._id}</TableCell>
          <TableCell>{row.nombre}</TableCell>
          <TableCell>{row.apellido}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell>{row.cursos ? row.cursos.join(', ') : 'N/A'}</TableCell>
        </TableRow>
))}
   </TableBody>
     </Table>
   </TableContainer>
);
}

export default ListaEstudiantesFil;