import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function BotonEditar({ estudianteId, onEditClick }) {
    
    const handleClick = () => {
        if (!estudianteId) return;
        onEditClick(estudianteId);
    };

    return (
        <Button 
            variant="outlined" 
            size="small"
            color="primary"
            onClick={handleClick}
            disabled={!estudianteId}
            startIcon={<EditIcon />}
        >
            Editar
        </Button>
    );
}

export default BotonEditar;