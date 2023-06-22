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

// assets
import { educational,
  recreational,
  social,
  diy,
  charity,
  cooking,
  relaxation,
  music,
  busywork } from '../assets';

export const activityTypes = [
  { value: 'education', Icon: BsBookHalf, img: educational },
  { value: 'recreational', Icon: MdLocalActivity, img: recreational },
  { value: 'social', Icon: FaUserFriends, img: social },
  { value: 'diy', Icon: RiScissorsFill, img: diy },
  { value: 'charity', Icon: FaDonate, img: charity },
  { value: 'cooking', Icon: FaCookieBite, img: cooking },
  { value: 'relaxation', Icon: TbMassage, img: relaxation },
  { value: 'music', Icon: FaGuitar, img: music },
  { value: 'busywork', Icon: FaHammer, img: busywork },
];

export const participants = new Array(10)
  .fill(null)
  .map((_, i) => ({ value: `${i + 1}` }));
