// routing
import { Outlet, useNavigation, NavLink } from 'react-router-dom';

// components
import UserInfo from './UserInfo';
import ChildLoader from './ChildLoader';

// constants
import { privateLinks } from '../../constants/links';

export default function PageNavbar() {
  const navigation = useNavigation();

  return (
    <div className="w-full max-width min-h-[95%] mb-10">
      <div className="box-container">
        <div className="box bg-navbar-pattern bg-center bg-cover items-end rounded-t-xl h-[250px]">
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
