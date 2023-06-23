// routing
import { useSubmit } from 'react-router-dom';

// components
import { CustomButton } from '../../../components';

// constants
import { statuses } from '../../../constants/activityStatuses';

export default function CardFooter({ activity }) {
  const submit = useSubmit();

  const { status } = activity;
  const arrayedStatuses = Object.values(statuses);
  const { color, Icon } = arrayedStatuses.find(({ value }) => value === status);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-primary flex gap-2">
        <p>Activity status:</p>
        <div className="flex gap-1">
          <span style={{ color }} className="font-bold">
            {` ${status} `}
          </span>
          <Icon size={22} color={color} />
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <p className="text-primary font-semibold">Available actions:</p>
        <div className="flex max-sm:flex-col gap-4">
          {arrayedStatuses.map(
            ({ value, color: currentColor, Icon: CurrentIcon }) => value !== status && (
            <CustomButton
              key={value}
              containerStyles="w-full rounded-md"
              cssStyles={{ backgroundColor: currentColor }}
              onClick={() => {
                submit(
                  { ...activity, action: value },
                  {
                    method: 'post',
                    replace: false,
                  },
                );
              }}
            >
              <div className="flex items-center justify-center gap-2">
                <CurrentIcon size={22} className="text-primary-white" />
                <p className="text-primary-white text-md">{value}</p>
              </div>
            </CustomButton>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
