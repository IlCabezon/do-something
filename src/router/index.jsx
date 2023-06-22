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

export default function Router() {
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
              children: [homeConfig, activitiesToDoConfig],
            },
          ],
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}
