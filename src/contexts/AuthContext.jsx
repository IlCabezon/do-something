// native
import { createContext, useMemo, useState } from 'react';

// utils
import { decodeToken } from '../utils/token.utils';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.token && decodeToken(localStorage.token),
  );

  const login = (session) => {
    setUser(session);
  };

  const logout = () => {
    /* localStorage.removeItem('token'); */
    if (localStorage.getItem('activities')) {
      localStorage.removeItem('activities');
    }
    setUser(null);
  };

  const contextValue = useMemo(() => ({ user, login, logout }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
