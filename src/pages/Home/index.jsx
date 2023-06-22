// native
import { useContext } from 'react';

// routing
import { useLoaderData, useRevalidator, useSubmit } from 'react-router-dom';

// components
import { TbReload } from 'react-icons/tb';
import { CustomSelect } from './components';
import { ActivityCard, CustomButton } from '../../components';

// context
import { AuthContext } from '../../contexts/AuthContext';

// constants
import { activityTypes, participants } from '../../constants/apiQuerys';

export function Component() {
  const submit = useSubmit();
  const { revalidate } = useRevalidator();
  const { activity } = useLoaderData();
  const { user } = useContext(AuthContext);

  return (
    <div className="box-container">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <div className="flex flex-col gap-3 relative">
          <p className="text-primary font-semibold text-[18px]">
            Welcome again:
          </p>
          <div className="flex gap-2 max-sm:flex-col">
            <div className="flex gap-2">
              <span className="brand-title capitalize font-bold">
                {user.name}
              </span>
              <span className="brand-title capitalize font-bold">
                {user.last}
              </span>
            </div>

            <span className="brand-title font-bold">
              <span>-</span>
              {' '}
              {user.age}
              {' '}
              years
            </span>
          </div>
        </div>

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
