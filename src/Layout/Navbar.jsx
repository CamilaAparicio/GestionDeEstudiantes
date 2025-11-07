import {AppBar, Toolbar, Typography, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import { IsDrawer } from './Drawer';
import ThemeButton from '../components/ThemeButton';

export const Navbar = () => (
    <AppBar position= "fixed" >
        <Toolbar sx={{display:"flex", justifyContent:"space-between"}}>
            <IsDrawer />
            <Typography variant="h6" sx={{flexGrow:2}}>
                StudiesApp
             </Typography> 
            <Button color="inherit" component={Link} to ="/">Inicio</Button>
                <ThemeButton />
        </Toolbar>
    </AppBar>  
);