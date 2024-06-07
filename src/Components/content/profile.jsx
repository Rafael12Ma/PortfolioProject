import classes from "./profile.module.css";
import me from "./me.jpg";
import ButtHead from "./buttHeader";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Profile() {
  return (
    <>
      <ButtHead />
      <div className={classes.box}>
        <div className={classes.profileCard}>
          <div className={classes.myImage}>
            <img src={me} alt="A foto about me!" />
          </div>
          <h1 className={classes.name}>Rafael Maroufidis</h1>
          <h2 className={classes.job}>Junior Developer.</h2>
          <div className="icon">
            <a
              className={classes.icons}
              href="https://www.facebook.com/profile.php?id=100026189599848"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className={classes.icons}
              href="https://github.com/Rafael12Ma"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className={classes.icons}
              href="https://www.instagram.com/maroufidis.r/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className={classes.icons}
              href="https://www.linkedin.com/in/rafail-maroufidis-79a905298/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
          <div>
            <a
              className={classes.email}
              href="mailto:rafaelmaroufidis@yahoo.com"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
