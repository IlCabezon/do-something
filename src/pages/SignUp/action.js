// routing
import { redirect } from 'react-router';

export default async function action({ request }) {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);

  localStorage.setItem('session', JSON.stringify(user));

  return redirect('/home');
}
