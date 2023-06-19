// routing
import { NavLink } from 'react-router-dom';

// constants
import { navbarLinks } from '../../constants/links';

// assets
import logo from '../../assets/logo.png';

// components
import CustomButton from '../CustomButton';

export default function Navbar() {
  return (
    <header className="py-5 px-20 w-full">
      <nav className="max-width max-h-20 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img src={logo} alt="logo" className="w-10" />
          <div className="flex gap-2">
            <span className="nav-title">
              Do
            </span>
            <span className="nav-title">
              Something!
            </span>
          </div>
        </div>
        <div>
          {navbarLinks.map(({ name, path }) => (
            <CustomButton key={name} containerStyles="transition ease-in-out border-[2px] border-primary-violet rounded-md first:text-primary-white text-primary-violet hover:bg-primary-violet ">
              <NavLink to={path} className="text-primary-violet text-[15px] font-semibold  text-md group-hover:text-primary-white">
                {name}
              </NavLink>
            </CustomButton>
          ))}
        </div>
      </nav>
    </header>
  );
}
