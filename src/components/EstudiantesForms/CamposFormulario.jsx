import { TextField, MenuItem, Stack } from '@mui/material';

const cursosValidos = ['Matemática', 'Historia', 'Ciencias', 'Arte'];

function CamposFormulario({ formData, handleChange, loading }) {
    return (
        <Stack>
            
            <Stack xs={12} sm={6}>
                <TextField fullWidth required label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} margin="normal" disabled={loading} />
            </Stack>

            <Stack xs={5} sm={6}>
                <TextField fullWidth required label="Apellido" name="apellido" value={formData.apellido} onChange={handleChange} margin="normal" disabled={loading}/>
            </Stack>
            
            <Stack xs={5}>
                <TextField fullWidth required type="email" label="Email" name="email" value={formData.email} onChange={handleChange} margin="normal" disabled={loading}/>
            </Stack>

            <Stack xs={5}>
                <TextField fullWidth select required label="Cursos" name="cursos" value=  {formData.cursos} onChange={handleChange} margin="normal" disabled={loading}
 helperText="Selecciona uno o más cursos" slotProps={{ select: { multiple: true } }}
         >
                    <MenuItem value="">
                        <em>Ninguno</em>
                    </MenuItem>
            
                    {cursosValidos.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </Stack>
        </Stack>
    );
}

export default CamposFormulario;