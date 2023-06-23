// constants
import { statuses } from '../../constants/activityStatuses';

const { discarded } = statuses;

export default function action(activitiesContext) {
  return async ({ request }) => {
    const { removeActivity, toggleStatus } = activitiesContext;

    const formData = await request.formData();
    const values = Object.fromEntries(formData);
    const { action: activityAction } = values;

    if (activityAction === discarded.value) {
      removeActivity(values);
    } else {
      toggleStatus(values, activityAction);
    }

    return null;
  };
}
