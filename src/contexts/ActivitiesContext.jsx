// native
import { createContext, useMemo, useState } from 'react';

// constants
import { statuses } from '../constants/activityStatuses';

export const ActivitiesContext = createContext();

// utils
function safelyParse(value) {
  try {
    return JSON.parse(value);
  } catch (_) {
    return JSON.parse(JSON.stringify(value));
  }
}

export function ActivitiesProvider({ children }) {
  const storageActivities = localStorage.getItem('activities');

  const [activities, setActivities] = useState(
    storageActivities ? safelyParse(storageActivities) : [],
  );

  const addActivity = (activity) => {
    if (activities.find((act) => act.key === activity.key)) {
      return {
        message: `The previous activity with id: ${activity.key} is already saved, find it on your activities`,
      };
    }

    const allActivities = [
      ...activities,
      { status: statuses.toDo.value, ...activity },
    ];

    setActivities(allActivities);
    localStorage.setItem('activities', JSON.stringify(allActivities));
    return {};
  };

  const removeActivity = ({ key: incomingKey }) => {
    const filteredActivities = activities.filter(
      ({ key }) => key !== incomingKey,
    );
    setActivities(filteredActivities);
    localStorage.setItem('activities', JSON.stringify(filteredActivities));
  };

  const toggleStatus = ({ key: incomingKey }, incomingStatus) => {
    const updatedActivities = activities.map((activity) => {
      const register = activity;

      if (register.key === incomingKey) {
        register.status = incomingStatus;
      }
      return register;
    });

    setActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));
  };

  const contextValue = useMemo(
    () => ({
      activities,
      addActivity,
      removeActivity,
      toggleStatus,
    }),
    [activities],
  );

  return (
    <ActivitiesContext.Provider value={contextValue}>
      {children}
    </ActivitiesContext.Provider>
  );
}
