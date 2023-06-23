// routing
import { redirect } from 'react-router-dom';

// services
import { generateSession } from '../../services/session.services';

export default function action(authContext) {
  return async ({ request }) => {
    const { login } = authContext;

    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);

    const { message, session } = generateSession(credentials);

    if (message) return { message };

    login(session);

    return redirect('/home');
  };
}
