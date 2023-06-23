// data
import { activities } from './activities';

export const getRandomActivity = () => {
  const index = Math.floor(Math.random() * (activities.length + 1));

  return activities[index];
};

export const getRandomActWithFilter = ({
  type: incomingType,
  participants: incomingParticipants,
}) => {
  let filteredActivities = activities;

  if (incomingType) {
    filteredActivities = filteredActivities.filter(
      ({ type }) => type === incomingType,
    );
  }

  if (incomingParticipants) {
    filteredActivities = filteredActivities.filter(
      ({ participants }) => `${participants}` === incomingParticipants,
    );
  }

  const index = Math.floor(Math.random() * (filteredActivities.length + 1));

  return filteredActivities[index] || [];
};
