
export default function action({ addActivity }) {
  return async ({ request }) => {
    const formData = await request.formData();
    const activity = Object.fromEntries(formData);

    addActivity(activity);

    return { activity };
  };
}
