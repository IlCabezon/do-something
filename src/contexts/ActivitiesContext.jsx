// native
import { createContext, useMemo, useState } from 'react';

// constants
import { statuses } from '../constants/acitivityStatuses';

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
    const allActivities = [...activities, { status: statuses.done.name, ...activity }];
    setActivities(allActivities);
    localStorage.setItem('activities', JSON.stringify(allActivities));
  };

  const removeActivity = ({ key: incomingKey }) => {
    const filteredActivities = activities.filter(({ key }) => key !== incomingKey);
    setActivities(filteredActivities);
  };

  const toggleStatus = ({ key: incomingKey }, status) => {
    const currentActivity = activities.find(({ key }) => key === incomingKey);
    currentActivity.status = status;

    setActivities([...activities, ...currentActivity]);
  };

  const contextValue = useMemo(() => ({
    activities,
    addActivity,
    removeActivity,
    toggleStatus,
  }), [activities]);

  return (
    <ActivitiesContext.Provider value={contextValue}>
      {children}
    </ActivitiesContext.Provider>
  );
}

