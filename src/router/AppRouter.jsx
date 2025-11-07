import {Routes, Route} from 'react-router-dom';
import {MenuLayout} from '../Layout/MenuLayout';
import Home from '../pages/Home/Home';
import EstudiantesPage from '../pages/AllEstudiante/EstudiantesPage';
import ListaEstudiantes from '../components/EstudiantesForms/ListaEstudiantes';
import AddEstudiantePage from '../pages/AddEstudiante/AddEstudiantePage';
import EstudiantesPorCursoPage from '../pages/Cursos/EstudiantesPorCursoPage';
import EditarEstudiantePage from '../pages/EditEstudiantePage/EditarEstudiantePage';

export const AppRouter = () => (
    <MenuLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudiantes" element={<EstudiantesPage />}>
                <Route index element={<ListaEstudiantes />} />
                <Route path="agregar" element={<AddEstudiantePage />} />
                <Route path="editar/:id" element={<EditarEstudiantePage />} />    
            </Route>
            <Route path="/cursos" element={<EstudiantesPorCursoPage />} />
        </Routes>
    </MenuLayout>
);