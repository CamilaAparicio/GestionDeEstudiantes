import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { homeCards } from './homeCards';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ textAlign: 'center',  alignItems: 'center', minHeight:'200vh', justifyContent:'center', flexDirection:'column', py:4, px:2 }}>
      <Typography variant="h4" gutterBottom>
        Bienvenida a la plataforma de gestión de alumnos
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
        Esta herramienta te permite administrar cursos, estudiantes y toda la información académica de forma eficiente y accesible.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {homeCards.map((card, index) => (
          <Grid sx={{xs:12, sm:6, md:4 }} key={index}>
            <Card>
              <CardActionArea onClick={() => navigate(card.route)}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <card.iconComponent fontSize="large" />
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;