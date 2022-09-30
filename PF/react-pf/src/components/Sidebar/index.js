import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import LogoSub from "../../assets/images/logo-name.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
      <img className="sub-logo" src={LogoSub} alt="munaimah-khan" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4d" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4d" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4d" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="works-link"
        to="/works"
      >
        
        <FontAwesomeIcon icon={faPaintBrush} color="#4d4d4d" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel="norefferer" href="https://github.com/MunaimahK">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4d" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="norefferer"
          href="https://www.linkedin.com/in/munaimah-khan-13ab20230/#experience"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4d" />
        </a>
      </li>
    </ul>
  </div>
  /*
  <div classname="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
      <img className="sub-logo" src={LogoSub} alt="munaimah" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icone={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="about-link" to="/about">
        <FontAwesomeIcon icone={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="contact-link" to="/contact">
        <FontAwesomeIcon icone={faHome} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
  */
);

export default Sidebar;
