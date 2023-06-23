// native
import { useContext } from 'react';

// context
import { AuthContext } from '../../contexts/AuthContext';

export default function UserInfo() {
  const { user } = useContext(AuthContext);

  return (
    <div className="box-container">
      <div className="w-[95vw] min-h-[150px] p-10 max-md:px-5 pb-0 flex relative bg-primary-container flex-col">
        <div className="flex flex-col gap-3 relative">
          <p className="text-primary font-semibold text-[18px]">
            Welcome again:
          </p>
          <div className="flex gap-2 items-center flex-wrap">
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
      </div>
    </div>
  );
}
