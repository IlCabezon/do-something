// native
import React from 'react';
import ReactDOM from 'react-dom/client';

// styles
import './global.css';

// router
import Router from './router';

// contexts
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
);
