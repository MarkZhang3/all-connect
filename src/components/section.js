import { useEffect } from "react";

const Section = ({ id, children }) => {
  useEffect(() => {
    const curSection = document.getElementById(id);

    const inView = () => {
      const rect = curSection.getBoundingClientRect();
      return rect.top <= 500 && rect.bottom >= 200;
    };

    const handleScroll = () => {
      if (inView()) {
        curSection.classList.add("visible");
      } else {
        curSection.classList.remove("visible");
      }
    };

    handleScroll(); // Make the first section appear on initial render

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);

  return (
    <div className="section" id={id}>
      {children}
    </div>
  );
};

export default Section;
