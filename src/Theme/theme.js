import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#5938dfff' },
    background: { default: '#f5ddbbff', paper: '#dac0f6ff' },
    text: { primary: '#000000' },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#11324cff' },
    background: { default: '#06162fff', paper: '#06357bff' },
    text: { primary: '#ffffff' },
  },
});