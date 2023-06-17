// native

// routing
import { createBrowserRouter } from 'react-router-dom';

// pages
import ActivitiesToDo from '../pages/ActivitiesToDo';
import Home, { loaderActivity } from '../pages/Home';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';

// components
import Layout from '../components/Layout';

/* const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login')); */

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: loaderActivity,
      },
      {
        path: 'login',
        lazy: () => import('../pages/Login'),
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'activities-to-do',
        element: <ActivitiesToDo />,
      },
    ],
  },
]);

export default router;
