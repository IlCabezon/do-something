// native
import { useContext } from 'react';

// routing
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// pages
import { activitiesToDoConfig,
  homeConfig,
  landingConfig,
  loginConfig,
  signUpConfig } from '../pages';

// components
import Layout from '../components/Layout';
import PageNavbar from '../components/PageNavbar';

// guards
import AuthGuard from '../guards/AuthGuard';

// contexts
import { ActivitiesContext } from '../contexts/ActivitiesContext';
import { AuthContext } from '../contexts/AuthContext';

export default function Router() {
  const activitiesContext = useContext(ActivitiesContext);
  const authContext = useContext(AuthContext);

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        landingConfig,
        {
          ...signUpConfig,
          lazy: () => signUpConfig.lazy(authContext),

        },
        loginConfig,
        {
          path: '',
          element: <AuthGuard />,
          children: [
            {
              element: <PageNavbar />,
              children: [
                {
                  ...homeConfig,
                  lazy: () => homeConfig.lazy(activitiesContext),
                },
                {
                  ...activitiesToDoConfig,
                  lazy: () => activitiesToDoConfig.lazy(activitiesContext),
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
