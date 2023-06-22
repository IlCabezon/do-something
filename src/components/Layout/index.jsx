// routing
import { Outlet } from 'react-router-dom';

// components
import Footer from './Footer';
import Navbar from './Navbar';

export default function index() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden h-[100vh] min-h-[100vh] flex flex-col  bg-primary">
      <Navbar />
      <div id="detail" className="w-full max-width h-full mb-10">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
