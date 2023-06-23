// routing
import { useSubmit } from 'react-router-dom';

// components
import { MdFavoriteBorder } from 'react-icons/md';
import { CustomButton } from '../../../components';

export default function CardFooter({ activity }) {
  const submit = useSubmit();

  return (
    <CustomButton
      containerStyles="w-full bg-secondary rounded-md"
      onClick={() => {
        submit(activity, {
          action: '/home',
          method: 'post',
          replace: false,
        });
      }}
    >
      <div className="w-full flex items-center justify-center gap-3">
        <p className="text-primary-white">Add to my activities</p>
        <MdFavoriteBorder size={22} className="text-primary-white" />
      </div>
    </CustomButton>
  );
}
