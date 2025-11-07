import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      mt: 4,
      py: 2,
      px: 2,
      textAlign: 'center',
      backgroundColor: 'primary.main',
      color: 'primary.contrastText',
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} StudiesApp — Hecho con amor por Camila Aparicio
    </Typography>
  </Box>
);

export default Footer;