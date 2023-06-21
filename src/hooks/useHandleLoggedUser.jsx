// native
import { useEffect, useContext } from 'react';

// routing
import { useNavigate } from 'react-router-dom';

// context
import { AuthContext } from '../contexts/AuthContext';

export default function useHandleLoggedUser() {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  const verifyContextState = (session) => !user && login(session);

  const redirectLoggedUser = (session) => {
    verifyContextState(session);
    navigate('/home');
  };

  useEffect(() => {
    if (user) redirectLoggedUser(user);
  }, []);

  return { redirectLoggedUser };
}
