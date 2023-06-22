// native
import { useContext } from 'react';

// routing
import { useLoaderData, useRevalidator } from 'react-router-dom';

// components
import { TbReload } from 'react-icons/tb';
import { CustomSelect } from './components';
import { CustomButton } from '../../components';

// context
import { AuthContext } from '../../contexts/AuthContext';


// constants
import { activityTypes, participants } from '../../constants/apiQuerys';

export function Component() {
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
          <div className="flex max-md:flex-col gap-2">
            <div className="flex gap-2">
              <span className="brand-title capitalize font-bold">
                {user.name}
              </span>
              <span className="brand-title capitalize font-bold">
                {user.last}
              </span>
            </div>

            <span className="brand-title capitalize font-bold max">
              <span>-</span>
              {' '}
              {user.age}
              {' '}
              years
            </span>
          </div>
        </div>

        <div className="w-full flex max-md:flex-col justify-evenly gap-5 mt-10">
          <div className="flex-1">
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
            <CustomButton containerStyles=" bg-secondary rounded-md" onClick={revalidate}>
              <TbReload size={22} className="text-primary-white" />
            </CustomButton>
          </div>
        </div>

        <div>
          <p className="text-primary mt-10">{JSON.stringify(activity)}</p>
        </div>

        <div />
      </div>
    </div>
  );
}
