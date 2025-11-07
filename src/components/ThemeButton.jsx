import { useContext } from 'react';
import { ThemeContext } from '../Theme/ThemeContext';
import { IconButton } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <IconButton aria-label="cambiar tema" color="inherit" size="small" onClick={toggleTheme}>
      {isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ThemeButton;