import Home from '../views/pages/home.js';
import Favorites from '../views/pages/favorites.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Home,
  '/favorite': Favorites,
  '/detail/:id': Detail,
};

export default routes;
