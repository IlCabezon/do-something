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

export default function Router() {
  const activitiesContext = useContext(ActivitiesContext);

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        landingConfig,
        signUpConfig,
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
