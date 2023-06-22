// components
import { MdFavoriteBorder, MdDescription } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import CustomButton from './CustomButton';

// constants
import { activityTypes } from '../constants/apiQuerys';

// assets
import defaultImage from '../assets/defaultImage.jpg';

export default function ActivityCard({ activity }) {
  const { activity: act, type, participants } = activity;

  const extendedActType = activityTypes.find(({ value }) => value === type);
  const imageBasedType = (extendedActType && extendedActType.img) || defaultImage;
  const IconBasedType = (extendedActType && extendedActType.Icon) || AiOutlineCheck;

  return (
    <div className="flex flex-col w-full min-h-[300px] bg-primary rounded-md">
      <div className="w-full max-md:h-[150px] max-2xl:h-[200px] h-[250px]">
        <img
          src={imageBasedType}
          alt="activity_bg"
          className="h-full w-full object-cover rounded-t-md"
        />
      </div>
      <div className="flex flex-col gap-4 text-primary px-4 py-6">
        {[
          {
            Icon: IconBasedType,
            title: 'Type: ',
            value: type,
          },
          {
            Icon: FaUserFriends,
            title: 'Amount of participants: ',
            value: participants,
          },
          {
            Icon: MdDescription,
            title: 'Details: ',
            value: act,
          },
        ].map(({ Icon, title, value }) => (
          <div key={title} className="flex gap-3">
            <Icon size={24} className="text-secondary" />
            <p className="text-lg">
              {title}
              <span className="first-letter:uppercase font-bold">{`${value}`}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="border-t border-primary px-4 py-6">
        <CustomButton containerStyles="w-full bg-secondary rounded-md">
          <div className="w-full flex items-center justify-center gap-3">
            <p className="text-primary-white">Add to my activities</p>
            <MdFavoriteBorder size={22} className="text-primary-white" />
          </div>
        </CustomButton>
      </div>
    </div>
  );
}
