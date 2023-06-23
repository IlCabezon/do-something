// routing
import { useLoaderData } from 'react-router-dom';

// components
import CardFooter from './components/CardFooter';
import { ActivityCard, ActivitiesFilter } from '../../components';

export function Component() {
  const { activity } = useLoaderData();

  return (
    <div className="box-container">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <ActivitiesFilter />

        <div className="my-10">
          <ActivityCard activity={activity} cardFooter={CardFooter} />
        </div>

        <div />
      </div>
    </div>
  );
}
