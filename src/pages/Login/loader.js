// routing
import { redirect } from 'react-router-dom';

export default function loader(authContext) {
  return () => {
    const { user } = authContext;

    if (user) return redirect('/home');

    return null;
  };
}
