import "./styles.css";
import Navbar from "./components/navbar.js";
import HorizontalContainer from "./components/horizontalContainer.js";
import Section from "./components/section.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function App() {
  const text = {
    aboutUs:
      "At AllConnect, we are dedicated to providing exceptional IT solutions for businesses of all sizes. With a team of experienced professionals, we offer a comprehensive range of services to meet your technology needs. Our commitment to innovation, reliability, and customer satisfaction sets us apart in the industry.",
    whoWeAre:
      "We are a leading IT company specializing in delivering cutting-edge solutions to help businesses thrive in the digital age. Our team of experts combines technical expertise with deep industry knowledge to address the unique challenges faced by our clients. Whether you need software development, cloud solutions, cybersecurity, or IT consulting, we have the skills and experience to deliver exceptional results.",
    ourApproach:
      "At AllConnect, we believe in a client-centric approach. We take the time to understand your business objectives and tailor our solutions to meet your specific requirements. Our collaborative and transparent process ensures that we work closely with you at every step to deliver customized solutions that drive growth and efficiency.",
    whyChooseUs: {
      expertise:
        "Expertise: Our team consists of highly skilled professionals with extensive experience in the IT industry. We stay up-to-date with the latest technologies and best practices to deliver innovative solutions.",
      quality:
        "Quality: We are committed to delivering excellence in everything we do. Our solutions are rigorously tested and undergo strict quality control to ensure they meet the highest standards.",
      customerFocus:
        "Customer Focus: Your satisfaction is our top priority. We strive to build long-term partnerships with our clients by providing exceptional service and support.",
      resultsDriven:
        "Results-Driven: We are results-oriented and aim to help your business succeed. Our solutions are designed to drive tangible outcomes and deliver a positive return on investment.",
    },
  };
  return (
    <>
      <Navbar />
      <Section id="home">
        <div className="background-image">
          <div className="home-overlay-content">
            <h4 className="home-title">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
              <span>Need Tech Support?</span>
            </h4>
            <h2 className="home-overlay-content-h2">We got you covered</h2>
            <p>{text.aboutUs}</p>
          </div>
        </div>
      </Section>
      <Section id="about">
        <div className="two-column-wrapper">
          <div className="left-column">
            {/* <HorizontalContainer title="About Us" text={text.aboutUs} /> */}
            <HorizontalContainer title="Who We Are" text={text.whoWeAre} />
            <HorizontalContainer title="Our Approach" text={text.ourApproach} />
          </div>
          <div className="right-column">
            <h2>Why Choose Us</h2>
            <ul>
              <li>{text.whyChooseUs.expertise}</li>
              <li>{text.whyChooseUs.quality}</li>
              <li>{text.whyChooseUs.customerFocus}</li>
              <li>{text.whyChooseUs.resultsDriven}</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section id="services"></Section>
      <Section id="contact"></Section>
      {/* <div className="section" id="home">
        <div className="background-image">
          <div className="home-overlay-content">
            <h4 className="home-title">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
              <span>Need Tech Support?</span>
            </h4>
            <h2>We got you covered</h2>
            <p>{text.aboutUs}</p>
          </div>
        </div>
      </div> */}
      {/* <div className="section" id="about">
        <div className="two-column-wrapper">
          <div className="left-column">
            <HorizontalContainer title="Who We Are" text={text.whoWeAre} />
            <HorizontalContainer title="Our Approach" text={text.ourApproach} />
          </div>
          <div className="right-column">
            <h2>Why Choose Us</h2>
            <ul>
              <li>{text.whyChooseUs.expertise}</li>
              <li>{text.whyChooseUs.quality}</li>
              <li>{text.whyChooseUs.customerFocus}</li>
              <li>{text.whyChooseUs.resultsDriven}</li>
            </ul>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
