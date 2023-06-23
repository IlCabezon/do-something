// data
import { activities } from './activities';

export const getRandomActivity = () => {
  const index = Math.floor(Math.random() * (activities.length + 1));

  return activities[index];
};

export const getRandomActWithFilter = (filters = []) => {
  const filteredActivities = activities.filter(({ type }) => filters.includes(type));
  const index = Math.floor(Math.random() * (filteredActivities.length + 1));

  return filteredActivities[index] || [];
};
