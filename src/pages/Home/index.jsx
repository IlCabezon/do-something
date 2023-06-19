// routing
import { useLoaderData } from 'react-router-dom';

export function Component() {
  const { activity } = useLoaderData();

  return (
    <div>
      home
      {JSON.stringify(activity)}
    </div>
  );
}
