// native
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './global.css';

// routing
import { RouterProvider } from 'react-router-dom';

// router
import router from './router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
