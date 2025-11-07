import {Routes, Route} from 'react-router-dom';
import {MenuLayout} from '../Layout/MenuLayout';
import Home from '../pages/Home/Home';
import Cursos from '../pages/Cursos/Cursos';

export const AppRouter = () => (
    <MenuLayout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
        </Routes>
    </MenuLayout>
)