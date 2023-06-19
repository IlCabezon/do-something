// routing
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/logo.png';

// constants
import { socialLinks } from '../../constants/links';

export default function Footer() {
  return (
    <footer className="border-t-2 border-grey flex flex-col">
      <div className="flex justify-between py-5 px-20">
        <div>
          <Link to="/" className="flex items-center gap-5">
            <img src={logo} alt="logo" className="w-10" />
            <div className="flex gap-2">
              <span className="nav-title">Do</span>
              <span className="nav-title">Something!</span>
            </div>
          </Link>
          <p className="text-gray-500">Do Something 2023</p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, url, image }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt="social medial logo"
                className="w-10 h-10 grayscale-[100%] hover:grayscale-0 transition ease-in-out duration-100"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-grey flex items-center py-5 px-20 text-gray-500">
        <p>@2023 CarHub. All Rights Reserved</p>
      </div>
    </footer>
  );
}
