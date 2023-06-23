// routing
import { useActionData, useLoaderData } from 'react-router-dom';

// components
import { AiFillWarning } from 'react-icons/ai';
import CardFooter from './components/CardFooter';
import { ActivityCard, ActivitiesFilter, NoResults } from '../../components';

export function Component() {
  const action = useActionData();
  const { activity } = useLoaderData();

  return (
    <div className="box-container">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <ActivitiesFilter />

        <div className="my-10">
          {action && action.message && (
            <div className="mb-5 rounded-lg py-4 px-8 flex bg-primary gap-2 items-center">
              <AiFillWarning size={40} className="text-yellow-500" />

              <p className="text-primary text-lg h-full">{action.message}</p>

            </div>
          )}
          {activity.key ? (
            <ActivityCard activity={activity} cardFooter={CardFooter} />
          ) : (
            <NoResults />
          )}
        </div>

        <div />
      </div>
    </div>
  );
}
