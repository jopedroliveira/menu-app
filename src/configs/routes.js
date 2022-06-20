import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Recipes from '../pages/Recipes';
import NotFound from '../pages/NotFound';
import Header from './../componetns/Header';

const AppRoutes = () => {
  return (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="recipes" element={<Recipes />} />
            <Route path='recipes/:id' element={<Recipes />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default AppRoutes