import NavbarButton from "./navbarButton.js";
import allConnectLogo from "../images/all_connect_logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={allConnectLogo} alt="image" className="navbar-logo"/>
      <ul className="navbar-links">
        <li>
          <NavbarButton text="Home" target="#home" />
        </li>
        <li>
          <NavbarButton text="About" target="#about" />
        </li>
        <li>
          <NavbarButton text="Services" target="#services" />
        </li>
        <li>
          <NavbarButton text="Contact" target="#contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
