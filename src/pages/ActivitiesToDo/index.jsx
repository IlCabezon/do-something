// routing
import { useLoaderData, useSubmit } from 'react-router-dom';

// components
import { CustomSelect, ActivityCard, CustomButton } from '../../components';
import CardFooter from './components/CardFooter';

// constants
import { activityTypes } from '../../constants/apiQuerys';
import { statuses } from '../../constants/activityStatuses';

export function Component() {
  const submit = useSubmit();
  const { activities } = useLoaderData();

  const arrayedStatuses = Object.values(statuses);

  return (
    <div className="box-container">
      <div className="box bg-primary-container rounded-b-xl flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex-1 flex max-sm:flex-col items-center max-sm:gap-5 gap-2 max-sm:mt-10">
            <CustomButton
              containerStyles="max-sm:w-full min-w-max bg-secondary rounded-md h-[45px] px-5"
              onClick={() => submit(null)}
            >
              <p className="text-primary-white">Clear Filters</p>
            </CustomButton>
            <CustomSelect
              options={activityTypes}
              queryName="type"
              placeholder="Select a type"
            />
          </div>

          <div className="flex-1 flex max-sm:flex-col items-center max-sm:gap-5 gap-2">
            <CustomSelect
              options={arrayedStatuses}
              queryName="status"
              placeholder="Status"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-10">
          {activities.map((activity) => (
            <ActivityCard
              key={activity.key}
              activity={activity}
              cardFooter={CardFooter}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
