export default function loader(activitiesContext) {
  return async ({ request }) => {
    const { activities } = activitiesContext;

    const url = new URL(request.url);
    const type = url.searchParams.get('type');
    const status = url.searchParams.get('status');

    let filteredActivities = activities;

    if (type) {
      filteredActivities = activities.filter(
        ({ type: currentType }) => currentType === type,
      );
    }
    if (status) {
      filteredActivities = activities.filter(
        ({ status: currentStatus }) => currentStatus === status,
      );
    }

    return {
      activities: filteredActivities,
      params: {
        type,
        participants: 0,
      },
    };
  };
}
