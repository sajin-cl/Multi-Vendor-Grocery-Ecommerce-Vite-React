import { createBrowserRouter } from 'react-router-dom';
import RegisterForm from '../pages/auth/Register';
import LoginForm from '../pages/auth/Login';
import UserLayout from '../layouts/UserLayout';
import Home from '../pages/user/Home'



const router = createBrowserRouter([

  {
    path: '/', element: <UserLayout />,
    children: [
      { index: true, element: <Home /> }
    ]
  },

  //Authentication
  { path: '/register', element: <RegisterForm /> },
  { path: '/login', element: <LoginForm /> },

]);

export default router;