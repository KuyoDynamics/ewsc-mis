import { useRoutes } from 'react-router-dom';
import AuthRouter from './auth-router';
import MainRouter from './main-router';

export default function AppRouter() {
  return useRoutes([MainRouter, ...AuthRouter]);
}
