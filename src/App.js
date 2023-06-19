import "./styles.css";
import Navbar from "./components/navbar.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <Navbar />
      <div className="section" id="home">
        <div className="background-image">
          <div className="home-overlay-content">
            <h4 className="home-title">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
              <span>Tech Support?</span>
            </h4>
            <h3>We got you covered</h3>
          </div>
        </div>
      </div>
      <div id="about"></div>
      <div id="services"></div>
      <div id="contact"></div>
    </>
  );
}

export default App;
