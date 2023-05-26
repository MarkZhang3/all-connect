function Navbar() {
  function handleClick(name) {
    console.log(name);
    if (name === "Home") {
      window.scrollTo(0, 100);
    }
    if (name === "About") {
      console.log("about");
      window.scrollTo(0, 10000);
    }
  }
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#">Logo</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#'">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
