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
            Resume: <a href="/public/logo192.png">Download</a>
          </p>
        </section>
        <section>
          <p>
            <DelayedLink to="/">Home</DelayedLink>
          </p>
          <p>
            <DelayedLink to="/works">Works</DelayedLink>
          </p>
          <p>
            <DelayedLink to="/contact">Contact</DelayedLink>
          </p>
        </section>
      </div>
      <div className="hr"></div>
      <div className="container bottom">
        <div className="icon-container">
          <a target="_blank" href="">
            <Facebook />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="">
            <Linkedin />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="">
            <Github />
          </a>
        </div>
        <div className="icon-container">
          <a target="_blank" href="">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
