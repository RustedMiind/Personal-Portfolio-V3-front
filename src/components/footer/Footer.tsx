/* eslint-disable jsx-a11y/anchor-is-valid */
import { Facebook, Linkedin, Github, Instagram } from "react-bootstrap-icons";
import DelayedLink from "../delayed-link/DelayedLink";
import "./footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container top">
        <section>
          <h2>ALI SOLIMAN</h2>
          <h4>You are one step away from getting your project to life.</h4>
          <h4>
            <DelayedLink to="/contact">Contact me now</DelayedLink>
          </h4>
        </section>
        <section>
          <p>Phone: +20 109 557 4449 / +20 155 644 9557</p>
          <p>Email: alisolimanworks@gmail.com</p>
          <p>
            Resume:{" "}
            <a href="./Ali Soliman - Resume.pdf" download>
              Download
            </a>
          </p>
        </section>
        <section>
          <p>
            <DelayedLink to="/">Home</DelayedLink>
          </p>
          {/* <p>
            <DelayedLink to="/works">Works</DelayedLink>
          </p> */}
          <p>
            <DelayedLink to="/contact">Contact</DelayedLink>
          </p>
        </section>
      </div>
      <div className="hr"></div>
      <div className="container bottom">
        <div className="icon-container">
          <a target="_blank" href="https://www.facebook.com/Ra7ieM">
            <Facebook />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="https://www.linkedin.com/in/rustedmind/">
            <Linkedin />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="https://github.com/RustedMiind">
            <Github />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="https://www.instagram.com/alisolimannn/">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
