import {Routes, Route} from 'react-router-dom';
import {MenuLayout} from '../Layout/MenuLayout';
import Home from '../pages/Home/Home';
import AddEstudiantePage from '../pages/AddEstudiante/AddEstudiantePage';

export const AppRouter = () => (
    <MenuLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudiantes" element={<AddEstudiantePage />} />
        </Routes>
    </MenuLayout>
)