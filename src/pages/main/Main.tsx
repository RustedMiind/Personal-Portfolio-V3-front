import { useEffect } from "react";
import "./main-view.scss";
import myImage from "./myImage.png";
function Main(props: PropsType) {
  useEffect(() => {
    // Change Image Position on scroll
    const menu = document.getElementById("selectMe");
    const view = document.getElementById("view");
    const scrollAction = () => {
      const scrolled = view?.scrollTop;
      console.log("action Deployed");
      if (menu && scrolled) {
        menu.style.bottom = `-${(scrolled ? scrolled : 0) * 0.5}px`;
        // menu.style.transform = `translateX(calc(-${
        //   (scrolled ? scrolled : 0) * 0.1
        // }px - 50%)) scale(${1 + scrolled / 1750})`;
      }
    };
    view?.addEventListener("scroll", scrollAction);

    return () => {
      view?.removeEventListener("scroll", scrollAction);
    };
  });
  return (
    <div className="main-view" id="view">
      <div className="intro">
        <div className="side left">
          <div className="intro-content">
            <h1>ALI SOLIMAN</h1>
            <h4>// RustedMind</h4>
            <h6>// ABOUT ME</h6>
            <h5>Experienced Full Stack Web Developer // Front End Focused</h5>
            <p>
              Hello! I'm Ali Soliman, a friendly and patient front end developer
              passionate about crafting visually appealing and user-friendly
              websites. With expertise in React.js, I am dedicated to creating
              seamless digital experiences. I believe in the power of
              collaboration and continuous learning, and I'm excited to bring
              your ideas to life. Let's build something amazing together!
            </p>
          </div>
        </div>
        <div className="side right">
          <img
            id="selectMe"
            className="my-image"
            // style={{ bottom: `-${props.scrolled / 2.25}px` }}
            src={myImage}
            alt=""
          />
        </div>
      </div>
      <div className="about">
        <h2>ABOUT ME</h2>
        <div className="sections">
          <div className="section">
            <h3>I am Ali Soliman</h3>
            <p>
              I am a skilled React developer with expertise in building scalable
              and efficient web applications. My experience includes developing
              responsive user interfaces, integrating APIs, and optimizing
              application performance.
            </p>
          </div>
          <div className="section">
            <h3>Personal Informations</h3>
            <p>Age: 20 years.</p>
            <p>Nationality: Egyptian.</p>
            <p>Location: Helwan, Cairo, Egypt.</p>
          </div>
          <div className="section">
            <h3>Hoppies and Interests</h3>
            <p>Playing Chess.</p>
            <p>Solving Programming Problems</p>
            <p>Playing E-sports Games</p>
          </div>
          <div className="section">
            <h3>Tech Stack</h3>
            <p>React.js, NEXT.js, Redux</p>
            <p>TypeScript, JavaScript</p>
            <p>HTML, CSS, SASS</p>
            <p>Tailwind CSS, Bootstrap</p>
            <p>Node.js, Express.js, Mongodb, Mongoose</p>
          </div>
        </div>
      </div>
    </div>
  );
}

type PropsType = {};

export default Main;
