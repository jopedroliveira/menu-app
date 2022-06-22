import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Recipes from '../pages/Recipes';
import EditRecipe from '../pages/EditRecipe';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route exact path="recipes" element={<Recipes />} />
        <Route path='recipes/:id' element={<EditRecipe />} />
        <Route exact path="not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes