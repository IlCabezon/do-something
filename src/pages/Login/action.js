// routing
import { redirect } from 'react-router-dom';

// services
import { generateSession } from '../../services/session.services';

export default function action(authContext) {
  return async ({ request }) => {
    const { login } = authContext;
    console.log('login', login);
    const formData = await request.formData();
    const credentials = Object.fromEntries(formData);
    console.log('credentials', credentials);

    const { message, session } = generateSession(credentials);
    console.log({ message, session });

    if (message) return { message };

    login(session);

    return redirect('/home');
  };
}
