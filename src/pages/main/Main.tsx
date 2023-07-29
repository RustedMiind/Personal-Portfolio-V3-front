import { useEffect } from "react";
import "./main-view.scss";
// import myImage from "./myImage.png";
// import bg from "./bg2.jpg";
const scrollAction = () => {
  const menu = document.getElementById("selectMe");
  const menu2 = document.getElementById("selectMe2");
  const view = document.getElementById("view");
  const scrolled = view?.scrollTop;
  // console.log("action Deployed");
  if (menu && menu2 && scrolled) {
    menu.style.bottom = `-${(scrolled ? scrolled : 0) * 0.5}px`;
    menu2.style.transform = `translateY(${
      (scrolled > 0 ? scrolled : 0) * 0.9
    }px)`;
    menu2.style.height = `${100 + scrolled / 80}%`;
    // menu.style.transform = `translateX(calc(-${
    //   (scrolled ? scrolled : 0) * 0.1
    // }px - 50%)) scale(${1 + scrolled / 1750})`;
  }
  if (menu2 && scrolled) {
    // menu2.style.top = `${(scrolled ? scrolled : 0) * 0.9}px`;
    // menu.style.transform = `translateX(calc(-${
    //   (scrolled ? scrolled : 0) * 0.1
    // }px - 50%)) scale(${1 + scrolled / 1750})`;
  }
};
function Main(props: PropsType) {
  useEffect(() => {
    // Change Image Position on scroll
    const view = document.getElementById("view");

    view?.addEventListener("scroll", scrollAction);
    // view && console.log("Event Added ++++++++++");

    return () => {
      view?.removeEventListener("scroll", scrollAction);
      // view && console.log("Event Removed ----------");
    };
  }, []);
  return (
    <>
      <div className="main-view">
        <div className="intro">
          <div className="side left">
            <div className="intro-content">
              <h1>ALI SOLIMAN</h1>
              <h4>// RustedMind</h4>
              <h6>// ABOUT ME</h6>
              <h5>Experienced Full Stack Web Developer // Front End Focused</h5>
              <p>
                Hello! I'm Ali Soliman, a friendly and patient front end
                developer passionate about crafting visually appealing and
                user-friendly websites. With expertise in React.js, I am
                dedicated to creating seamless digital experiences. I believe in
                the power of collaboration and continuous learning, and I'm
                excited to bring your ideas to life. Let's build something
                amazing together!
              </p>
            </div>
          </div>
          <div className="side right">
            <img
              id="selectMe2"
              className="bg-image"
              // style={{ bottom: `-${props.scrolled / 2.25}px` }}
              src="/bg2-resized.jpg"
              alt=""
            />
            <img
              id="selectMe"
              className="my-image"
              // style={{ bottom: `-${props.scrolled / 2.25}px` }}
              src="/myImage.png"
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
                I am a skilled React developer with expertise in building
                scalable and efficient web applications. My experience includes
                developing responsive user interfaces, integrating APIs, and
                optimizing application performance.
              </p>
            </div>
            <div className="section">
              <h3>Personal Informations</h3>
              <p>Age: 20 years.</p>
              <p>Nationality: Egyptian.</p>
              <p>Location: Helwan, Cairo, Egypt.</p>
            </div>
            <div className="section">
              <h3>Work Experience</h3>
              <h4>Vision Dimensions</h4>
              <p>2023 - present</p>
              <p>
                As a React.js developer at Vision Dimensions, my primary
                responsibility was to design and develop an in-house dashboard
                to manage the company system. I gained extensive experience in
                React.js and worked closely with the team to ensure the smooth
                functioning of the dashboard.
              </p>
              <h4>Freelancer</h4>
              <p>2023 - present</p>
              <p>
                I have worked as a freelance React.js developer for the past 2
                years. During this time, I have gained extensive experience in
                developing React applications, creating and managing APIs, and
                implementing complex user interfaces. I have also collaborated
                with clients to understand their needs and deliver high-quality
                projects on time.
              </p>
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
    </>
  );
}

type PropsType = {};

export default Main;
