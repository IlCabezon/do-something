// adapter
import { adaptActivity } from '../../adapters/activity.adapter';

// mocks
import { getRandomActivity, getRandomActWithFilter } from '../../mocks/apiEmulator';

const env = import.meta.env.VITE_ENV;

export default async function loaderActivity({ request }) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const participants = url.searchParams.get('participants');

  let activity;
  if (env === 'prod') {
    const filters = [];
    if (type) {
      filters.push(type);
    }
    if (participants) {
      filters.push(participants);
    }

    if (filters.length) {
      activity = getRandomActWithFilter(filters);
    } else {
      activity = getRandomActivity();
    }
  } else {
    const res = await fetch(
      `http://www.boredapi.com/api/activity?${type ? `type=${type}&` : ''}${
        participants ? `participants=${participants}` : ''
      }`,
    );

    activity = await res.json();
  }


  return { activity: adaptActivity(activity), params: { type, participants } };
}
