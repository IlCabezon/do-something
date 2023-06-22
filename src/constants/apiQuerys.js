// components
import { BsBookHalf } from 'react-icons/bs';
import { MdLocalActivity } from 'react-icons/md';
import { FaUserFriends,
  FaCookieBite,
  FaGuitar,
  FaHammer,
  FaDonate } from 'react-icons/fa';
import { RiScissorsFill } from 'react-icons/ri';
import { TbMassage } from 'react-icons/tb';

export const activityTypes = [
  { value: 'education', Icon: BsBookHalf },
  { value: 'recreational', Icon: MdLocalActivity },
  { value: 'social', Icon: FaUserFriends },
  { value: 'diy', Icon: RiScissorsFill },
  { value: 'charity', Icon: FaDonate },
  { value: 'cooking', Icon: FaCookieBite },
  { value: 'relaxation', Icon: TbMassage },
  { value: 'music', Icon: FaGuitar },
  { value: 'busywork', Icon: FaHammer },
];

export const participants = new Array(10).fill(null).map((_, i) => ({ value: `${i + 1}` }));
