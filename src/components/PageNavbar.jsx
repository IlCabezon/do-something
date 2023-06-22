// native
import { useContext } from 'react';

// routing
import { Outlet, useNavigation, NavLink } from 'react-router-dom';

// constants
import { privateLinks } from '../constants/links';

// contexts
import { AuthContext } from '../contexts/AuthContext';

export default function PageNavbar() {
  const navigation = useNavigation();

  return (
    <div className="w-full max-width min-h-[95%] mb-10">
      <div className="box-container">
        <div className="box bg-navbar-pattern bg-center bg-cover items-end rounded-t-xl">
          <div className="absolute right-0 bottom-0 h-[50px] flex items-center w-full ">
            <NavLink
              key="private_home"
              to={privateLinks.home.path}
              className={({ isActive }) => `nav-tab ${
                isActive ? 'nav-tab__selected' : 'nav-tab__unselected'
              }`}
            >
              {privateLinks.home.name}
            </NavLink>

            <NavLink
              key="private_activities"
              to={privateLinks.activities.path}
              className={({ isActive }) => `nav-tab rounded-tr-xl ${
                isActive ? 'nav-tab__selected' : 'nav-tab__unselected'
              }`}
            >
              {privateLinks.activities.name}
            </NavLink>
          </div>
        </div>
      </div>

      <UserInfo />

      {navigation.state !== 'idle' ? <ChildLoader /> : <Outlet />}
    </div>
  );
}

function UserInfo() {
  const { user } = useContext(AuthContext);

  return (
    <div className="box-container">
      <div className="w-[95vw] min-h-[150px] p-10 max-md:px-5 pb-0 flex relative bg-primary-container flex-col">
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
      </div>
    </div>
  );
}

function ChildLoader() {
  return (
    <div className="box-container ">
      <div className="box bg-primary-container rounded-b-xl flex-col">
        <div className="animate-pulse pt-10 md:flex">
          <div className="flex gap-2 w-full">
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2" />
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2 flex-1" />
          </div>
          <div className="flex gap-2">
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2 flex-1" />
            <div className="bg-gray-200 h-10 rounded-md w-1/4 mb-2" />
          </div>
          <div className="mt-10 bg-gray-200 h-[300px] rounded-md mb-2" />
        </div>
      </div>
    </div>
  );
}
