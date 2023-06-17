// routing
import { useLoaderData } from 'react-router-dom';

export const loaderActivity = async () => {
  // TODO implement abort controller

  const res = await fetch('http://www.boredapi.com/api/activity');

  const activity = await res.json();

  return { activity };
};

export default function index() {
  const { activity } = useLoaderData();

  return (
    <div>
      home
      {JSON.stringify(activity)}
    </div>
  );
}
