// native
import { useContext } from 'react';

// routing
import { Outlet, Navigate } from 'react-router-dom';

// context
import { AuthContext } from '../contexts/AuthContext';

export default function AuthGuard() {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate replace to="/login" />;
}
