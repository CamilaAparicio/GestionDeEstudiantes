import {useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Toolbar} from '@mui/material';
import {Navbar} from './Navbar';
import Footer from './Footer';


export const MenuLayout = ({children}) => {
    const theme = useTheme();

    return(
        <Box sx={{
            backgroundColor: theme.palette.background.default,
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <Navbar />
            <Toolbar />
         <Box component= "main" sx={{ flexGrow: 1, p:2}}>
            {children}
         </Box>
                <Footer />
        </Box>
    );
};