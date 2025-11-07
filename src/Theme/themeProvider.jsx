import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {useState, useMemo} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeContext} from './ThemeContext';
import {lightTheme, darkTheme} from './theme';

export const ThemeProvider = ({children}) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => setIsDarkTheme(prev => !prev);

    const theme = useMemo(()=> (isDarkTheme ? darkTheme : lightTheme), [isDarkTheme]);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleTheme}}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};