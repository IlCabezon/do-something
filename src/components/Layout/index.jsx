// routing
import { Outlet } from 'react-router-dom';

// components
import Footer from './Footer';
import Navbar from './Navbar';

export default function index() {
  return (
    <main>
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
