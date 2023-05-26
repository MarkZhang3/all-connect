const NavbarButton = ({ text, target }) => {
  const scrollToSection = () => {
    const section = document.querySelector(target);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <button className="navbar-button" onClick={scrollToSection}>
      {text}
    </button>
  );
};

export default NavbarButton;
