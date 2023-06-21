// services
import { createAccount, logInToAccount } from '../../services/session.services';

export default async function action({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  const token = await createAccount(user);

  const { session } = logInToAccount(token);

  return { session };
}
