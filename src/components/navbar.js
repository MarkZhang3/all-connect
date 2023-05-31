import NavbarButton from "./navbarButton.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Logo</p>
      </div>
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
