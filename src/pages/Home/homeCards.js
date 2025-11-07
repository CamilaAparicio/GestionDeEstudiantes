import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';

export const homeCards = [
  {
    title: "Cursos",
    description: "Gestioná los cursos disponibles.",
    iconComponent: SchoolIcon,
    route: "/cursos",
  },
  {
    title: "Estudiantes",
    description: "Accede al listado de estudiantes.",
    iconComponent: PeopleIcon,
    route: "/estudiantes",
  },
];