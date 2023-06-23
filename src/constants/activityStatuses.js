// components
import { AiFillCheckCircle, AiFillDelete, AiFillPlayCircle } from 'react-icons/ai';
import { MdPending } from 'react-icons/md';

export const statuses = {
  toDo: { value: 'To do', color: '#FF9800', Icon: MdPending },
  inProgress: { value: 'In progress', color: '#4CAF50', Icon: AiFillPlayCircle },
  done: { value: 'Done', color: '#2196F3', Icon: AiFillCheckCircle },
  discarded: { value: 'Delete', color: '#F44336', Icon: AiFillDelete },
};
