import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/design.png";
import AGB from "./AGB"; // Import, falls AGB in der Komponente genutzt wird
import Datenschutz from "./Datenschutz"; // Import, falls Datenschutz in der Komponente genutzt wird
import Impressum from "./Impressum"; // Import, falls Impressum in der Komponente genutzt wird

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scrollt die Seite ganz nach oben
  };

  return (
    <footer id="Footer" className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 justify-between">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-start mb-4">
              <img className="h-[4vh] w-[7vh] mb-2" src={logo} alt="logo" />
              <h2 className="text-lg font-semibold">Rich Life</h2>
            </div>
            <p className="text-gray-600">© copyright Rich Life 2024.</p>
            <p>All rights reserved.</p>
          </div>

          {/* Pages Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="text-gray-600">
              <li>
                <Link to="/" onClick={() => handleLinkClick("/")}>Home</Link>
              </li>
              <li>
                <Link to="/aboutme" onClick={() => handleLinkClick("/kenstar")}>About Me</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Socials</h3>
            <ul className="text-gray-600">
              <li>
                <a href="https://www.instagram.com/richlife.original" target="_blank" rel="noopener noreferrer">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@richlife.original" target="_blank" rel="noopener noreferrer">Tiktok</a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="text-gray-600">
              <li><Link to="/AGB" onClick={() => handleLinkClick("/AGB")}>AGB</Link></li> {/* Link zu den AGB */}
              <li><Link to="/Datenschutz" onClick={() => handleLinkClick("/Datenschutz")}>Datenschutz</Link></li> {/* Link zu den Nutzungsbedingungen */}
              <li><Link to="/Impressum" onClick={() => handleLinkClick("/Impressum")}>Impressum</Link></li> {/* Link zur Cookie-Richtlinie */}
            </ul>
          </div>
        </div>
        <h1 className="text-[15vh] sm:text-[25vh] text-center pt-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-grund to-web">
          Rich Life
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
