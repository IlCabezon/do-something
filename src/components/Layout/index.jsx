// routing
import { Outlet } from 'react-router-dom';

// components
import Footer from './Footer';
import Navbar from './Navbar';

export default function index() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden min-h-[100vh] flex flex-col justify-between">
      <Navbar />
      <div id="detail">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
