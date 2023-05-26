import NavbarButton from "./navbarButton.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <p>Logo</p>
      </div>
      <ul className="navbar-links">
        <li>
          <NavbarButton text="Home" />
        </li>
        <li>
          <NavbarButton text="About" />
        </li>
        <li>
          <NavbarButton text="Services" />
        </li>
        <li>
          <NavbarButton text="Contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
