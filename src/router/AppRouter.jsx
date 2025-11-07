import {Routes, Route} from 'react-router-dom';
import {MenuLayout} from '../Layout/MenuLayout';
import Home from '../pages/Home/Home';
import EstudiantesPage from '../pages/AllEstudiante/EstudiantesPage';
import ListaEstudiantes from '../components/EstudiantesForms/ListaEstudiantes';
import AddEstudiantePage from '../pages/AddEstudiante/AddEstudiantePage';

export const AppRouter = () => (
    <MenuLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudiantes" element={<EstudiantesPage />} />
            <Route path="/estudiantes/lista" element={<ListaEstudiantes />}/>
            <Route path="/estudiantes/agregar" element={<AddEstudiantePage />} />
        </Routes>
    </MenuLayout>
)