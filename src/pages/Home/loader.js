// adapter
import { adaptActivity } from '../../adapters/activity.adapter';

// mocks
import { getRandomActivity, getRandomActWithFilter } from '../../mocks/apiEmulator';

// constants
import { baseUrl } from '../../constants/apiPaths';

const env = import.meta.env.VITE_ENV;

export default async function loaderActivity({ request }) {
  const url = new URL(request.url);
  const type = url.searchParams.get('type');
  const participants = url.searchParams.get('participants');

  let activity;
  if (env === 'prod') {
    const filters = {};
    if (type) {
      filters.type = type;
    }
    if (participants) {
      filters.participants = participants;
    }

    if (Object.values(filters).length > 0) {
      activity = getRandomActWithFilter(filters);
    } else {
      activity = getRandomActivity();
    }
  } else {
    const res = await fetch(
      `${baseUrl}?${type ? `type=${type}&` : ''}${
        participants ? `participants=${participants}` : ''
      }`,
    );

    activity = await res.json();
  }


  return { activity: adaptActivity(activity), params: { type, participants } };
}
