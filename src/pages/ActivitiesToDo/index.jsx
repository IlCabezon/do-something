// native
import { useContext } from 'react';

// components


// contexts
import { ActivitiesContext } from '../../contexts/ActivitiesContext';

export function Component() {
  const { activities } = useContext(ActivitiesContext);

  return (
    <div className="box-container">
      {
        activities.map((activity) => JSON.stringify(activity))
      }
    </div>
  );
}
