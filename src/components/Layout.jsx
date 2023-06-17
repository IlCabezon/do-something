// routing
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

export default function Layout() {
  const navigation = useNavigation();

  return (
    <>
      <main>
        <Navbar />

        {navigation.state === 'loading' && <p>loading</p>}
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign up</NavLink>
      <NavLink to="/activities-to-do">Activities</NavLink>
    </nav>
  );
}
