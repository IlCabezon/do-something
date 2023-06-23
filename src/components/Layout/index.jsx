// routing
import { Outlet } from 'react-router-dom';

// components
import Footer from './Footer';
import Navbar from './Navbar';

export default function index() {
  return (
    <main className="max-w-[100vw] overflow-x-hidden min-h-[100vh] flex flex-col  bg-primary">
      <Navbar />
      <div className="h-32" />
      <div id="detail" className="w-full max-width min-h-[80vh] mb-10">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
