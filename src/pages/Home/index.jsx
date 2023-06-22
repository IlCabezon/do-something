// routing
import { useLoaderData, useRevalidator, useSubmit } from 'react-router-dom';

// components
import { TbReload } from 'react-icons/tb';
import { CustomSelect } from './components';
import { ActivityCard, CustomButton } from '../../components';

// constants
import { activityTypes, participants } from '../../constants/apiQuerys';

export function Component() {
  const submit = useSubmit();
  const { revalidate } = useRevalidator();
  const { activity } = useLoaderData();

  return (
    <div className="box-container">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <div className="w-full flex max-md:flex-col justify-evenly max-sm:gap-5 gap-2 mt-10">
          <div className="flex-1 flex max-sm:flex-col items-center max-sm:gap-5 gap-2">
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
          <div className="flex-[0.5] flex items-center gap-2">
            <CustomSelect
              options={participants}
              queryName="participants"
              placeholder="Participants"
            />
            <CustomButton
              containerStyles=" bg-secondary rounded-md h-[45px] px-5"
              onClick={revalidate}
            >
              <TbReload size={22} className="text-primary-white" />
            </CustomButton>
          </div>
        </div>

        <div className="my-10">
          <ActivityCard activity={activity} />
        </div>

        <div />
      </div>
    </div>
  );
}
