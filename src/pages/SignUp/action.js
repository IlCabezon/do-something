// services
import { redirect } from 'react-router-dom';
import { createAccount,
  generateSession } from '../../services/session.services';

// routing

export default function action(authProvider) {
  return async ({ request }) => {
    const { login } = authProvider;

    const formData = await request.formData();
    const user = Object.fromEntries(formData);

    const loweredCase = user.email.toLowerCase();
    user.email = loweredCase;

    await createAccount(user);
    const { session } = generateSession(user);
    login(session);

    return redirect('/home');
  };
}
