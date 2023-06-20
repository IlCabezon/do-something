// routing
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/logo.png';

// constants
import { socialLinks } from '../../constants/links';

export default function Footer() {
  return (
    <footer className="border-t-2 border-primary flex flex-col">
      <div className="flex max-md:flex-col justify-between items-center gap-5 py-5 px-20 max-md:px-10">
        <div>
          <Link to="/" className="flex items-center gap-5">
            <img src={logo} alt="logo" className="w-10" />
            <div className="flex gap-2">
              <span className="brand-title">Do</span>
              <span className="brand-title">Something!</span>
            </div>
          </Link>
          <p className="text-primary-grey max-md:text-center">
            Do Something 2023
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socialLinks.map(({ name, url, image }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer">
              <img
                src={image}
                alt="social medial logo"
                className="w-10 h-10 md:grayscale-[100%] md:hover:grayscale-0 transition ease-in-out duration-100"
              />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-primary flex items-center py-5 max-md:px-10 px-20 text-primary-grey">
        <p>@2023 CarHub. All Rights Reserved</p>
      </div>
    </footer>
  );
}
