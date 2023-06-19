// routing
import { NavLink } from 'react-router-dom';

// constants
import { navbarLinks } from '../../constants/links';

export default function Navbar() {
  return (
    <nav>
      {navbarLinks.map(({ name, path }) => (
        <NavLink key={name} to={path}>
          {name}
        </NavLink>
      ))}
    </nav>
  );
}
