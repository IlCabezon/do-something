
export default function action({ addActivity }) {
  return async ({ request }) => {
    const formData = await request.formData();
    const activity = Object.fromEntries(formData);

    const { message } = addActivity(activity);

    if (message) return { message };

    return { activity };
  };
}
