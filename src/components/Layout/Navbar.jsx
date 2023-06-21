// native
import { useContext } from 'react';

// routing
import { NavLink, useMatch } from 'react-router-dom';

// constants
import { BsFillSunFill } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';

// assets
import logo from '../../assets/logo.png';

// components
import CustomButton from '../CustomButton';
import MenuAvatar from '../MenuAvatar';

// contexts
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const isLanding = Boolean(useMatch('/sign-up'));

  return (
    <header className="py-5 md:px-20 max-md:px-5 w-full">
      <nav className="max-width max-h-20 mx-auto flex justify-between items-center">
        <NavLink to="/">
          <div className="flex items-center gap-5">
            <img src={logo} alt="logo" className="w-10" />
            <div className="flex gap-2 max-md:hidden">
              <span className="brand-title">Do</span>
              <span className="brand-title">Something!</span>
            </div>
          </div>
        </NavLink>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 relative">
            <CustomButton onClick={toggleTheme} containerStyles="px-1">
              <div className="theme-switch__container">
                <div className="theme-switch__icon__container transition-transform dark:rotate-[360deg]">
                  {theme !== 'dark' ? (
                    <BsFillSunFill size={25} className="theme-switch__icon" />
                  ) : (
                    <RiMoonClearFill size={25} className="theme-switch__icon" />
                  )}
                </div>
              </div>
            </CustomButton>

            {user ? (
              <MenuAvatar user={user} />
            ) : (
              <CustomButton containerStyles="transition ease-in-out border-[2px] border-secondary rounded-md first:text-primary-white ">
                <NavLink
                  to={isLanding ? '/login' : '/sign-up'}
                  className="text-secondary text-[15px] max-md:text-[13px] font-semibold  text-md group-hover:text-primary dark:group-hover:text-primary"
                >
                  {isLanding ? 'Login' : 'Sing Up'}
                </NavLink>
              </CustomButton>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
