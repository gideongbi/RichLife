import logo from "../assets/design.png";
import { navItems } from "../constants";
import { Menu, X, Instagram } from "lucide-react";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  // Toggle-Funktion für das mobile Menü
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrollt die Seite ganz nach oben
    setMobileDrawerOpen(false); // Schließt das mobile Drawer-Menü
  };

  return (
    <nav className={`z-50 py-2 backdrop-blur-lg border-b border-neutral-700/80 ${mobileDrawerOpen ? 'fixed w-full' : 'sticky top-0'}`}>
      <div className="container mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link to={"/"}>
              <img className="h-[6vh] w-[11vh]" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Navigation Links - Zentrieren */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => handleLinkClick(item.href)}
                  className="text-center relative z-10 group-hover:text-white transition-colors duration-300 px-4"
                >
                  {item.label}
                </button>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="w-full h-full bg-web rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 opacity-0 group-hover:opacity-100"></div>
                </div>
              </li>
            ))}
          </ul>

          {/* Instagram und TikTok Icons (visible on large screens) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="https://www.instagram.com/richlife.original?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="text-neutral-700 hover:text-web opacity-50 hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
            </a>
            <a
              href="https://www.tiktok.com/@richlife.original"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} className="text-neutral-700 hover:text-web opacity-50 hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden md:flex flex-col justify-end p-4">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="backdrop-blur-lg bg-white/1 text-white inset-0 h-screen w-screen z-10 flex flex-col items-center lg:hidden">
            <ul className="w-full h-full flex flex-col items-center justify-evenly py-32">
              {/* Dynamisches Mapping der navItems */}
              {navItems.map((item, index) => (
                <li key={index} className="w-1/3">
                  <button 
                    onClick={() => handleLinkClick(item.href)} // Verwendung von handleLinkClick
                    className=" w-full block text-center p-2 text-xl bg-web rounded-full"
                  >
                    {item.label}
                  </button>
                </li>
              ))}

              {/* Instagram Text-Link */}
              <li className="w-1/3">
                <a
                  href="https://www.instagram.com/richlife.original?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 text-xl bg-web rounded-full"
                >
                  Instagram
                </a>
              </li>

              {/* TikTok Text-Link */}
              <li className="w-1/3">
                <a
                  href="https://www.tiktok.com/@richlife.original"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center p-2 text-xl bg-web rounded-full"
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
