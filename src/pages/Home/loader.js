// adapter
import { adaptActivity } from '../../adapters/activity.adapter';

export default async function loaderActivity({ request }) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const participants = url.searchParams.get('participants');

  const res = await fetch(
    `http://www.boredapi.com/api/activity?${type ? `type=${type}&` : ''}${
      participants ? `participants=${participants}` : ''
    }`,
  );

  const activity = await res.json();

  return { activity: adaptActivity(activity), params: { type, participants } };
}
