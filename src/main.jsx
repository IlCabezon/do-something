// native
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './global.css';

// routing
import { RouterProvider } from 'react-router-dom';

// router
import router from './router';

// contexts
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
