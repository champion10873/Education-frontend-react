import { useRoutes } from 'react-router-dom';
// project import
import MainRoutes from './MainRoutes';
import LoginRoute from './LoginReuter';
import AdminRoutes from './AdminRoutes';
import RegisterRoute from './RegisterRoutes';
import SuccessRoute from './Registersuccess';
import Verification from './Verifyemail';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoute,RegisterRoute, MainRoutes, AdminRoutes,Verification, SuccessRoute]);
  
}
