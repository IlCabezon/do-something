// services
import { logInToAccount } from '../../services/session.services';

export default async function action(props) {
  const formData = await props.request.formData();
  const credentials = Object.fromEntries(formData);

  const { message, session } = logInToAccount(credentials);

  if (message) return { message };
  return { session };
}
