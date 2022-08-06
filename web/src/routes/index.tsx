import { useRoutes } from 'react-router-dom';
import AppRouter from './router';

function AppRoutes() {
  return useRoutes([AppRouter]);
}

export default AppRoutes;
