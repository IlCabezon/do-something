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

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [],
  },
];

[
  activitiesToDoConfig,
  homeConfig,
  landingConfig,
  loginConfig,
  signUpConfig,
].forEach((page) => {
  if (page.layout === false) {
    routes.push(page);
  } else {
    routes[0].children.push(page);
  }
});

const router = createBrowserRouter(routes);

export default router;
