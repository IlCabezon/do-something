// routing
import { createBrowserRouter } from 'react-router-dom';

// pages
import {
  activitiesToDoConfig,
  homeConfig,
  landingConfig,
  loginConfig,
  signUpConfig,
} from '../pages';

// components
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      landingConfig,
      homeConfig,
      signUpConfig,
      loginConfig,
      activitiesToDoConfig,
    ],
  },
]);

export default router;
