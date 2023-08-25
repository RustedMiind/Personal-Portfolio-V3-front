import { useEffect } from "react";
import "./main-view.scss";
import Projects from "../projects/Projects";
const scrollAction = () => {
  const menu = document.getElementById("selectMe");
  const menu2 = document.getElementById("selectMe2");
  const view = document.getElementById("view");
  const scrolled = view?.scrollTop;
  if (menu && menu2 && scrolled) {
    menu.style.transition = "unset";
    menu2.style.transition = "unset";
    menu.style.bottom = `-${(scrolled ? scrolled : 0) * 0.5}px`;
    menu2.style.transform = `translateY(${
      (scrolled ? scrolled : 0) * 0.9
    }px) scale(${1 + scrolled / 4000})`;
    setTimeout(() => {
      const scrolled = view?.scrollTop;
      if (scrolled <= 0) {
        menu.style.transition = "400ms";
        menu2.style.transition = "400ms";
        menu.style.bottom = `0px`;
        menu2.style.transform = `translateY(0px)  scale(1)`;
      }
    }, 200);
  }
};
function Main(props: PropsType) {
  useEffect(() => {
    scrollAction();

    const view = document.getElementById("view");

    view?.addEventListener("scroll", scrollAction);

    return () => {
      view?.removeEventListener("scroll", scrollAction);
    };
  }, []);
  return (
    <>
      <div className="main-view">
        <div className="intro">
          <div className="side left">
            <div className="tight-section">
              <div className="intro-content">
                <h1>ALI SOLIMAN</h1>
                <p>
                  Hello! I'm Ali Soliman, a friendly and patient front end
                  developer passionate about crafting visually appealing and
                  user-friendly websites. With expertise in React.js, I am
                  dedicated to creating seamless digital experiences. I believe
                  in the power of collaboration and continuous learning, and I'm
                  excited to bring your ideas to life. Let's build something
                  amazing together!
                </p>
              </div>
            </div>
          </div>
          <div className="side right">
            <img
              id="selectMe2"
              className="bg-image"
              src="/bg2-resized.jpg"
              alt=""
            />
            <img id="selectMe" className="my-image" src="/myImage.png" alt="" />
          </div>
        </div>
        <div className="about">
          <h2>ABOUT ME</h2>
          <div className="main-section">
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
                During my time as a React Front End Developer at Vision
                Dimensions Company since 4/2023, I worked on two significant
                projects. Firstly, I developed the front end of a dashboard that
                oversees all organization management. Secondly, I created a
                CMS-based website that allows users to view and request various
                services provided by the company. The website link is
                <a target="_blank" href="https://www.vd-2030.com/">
                  {" "}
                  www.vd-2030.com{" "}
                </a>
                , and the dashboard link is
                <a target="_blank" href="https://visiondimensions.com/">
                  {" "}
                  visiondimensions.com{" "}
                </a>
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
              <h3>Tech Stack</h3>
              <p>React.js, NEXT.js, Redux</p>
              <p>TypeScript, JavaScript</p>
              <p>HTML, CSS, SASS</p>
              <p>Tailwind CSS, Bootstrap</p>
              <p>Node.js, Express.js, Mongodb, Mongoose</p>
            </div>
            <div className="section">
              <h3>Hoppies and Interests</h3>
              <p>Playing Chess.</p>
              <p>Solving Programming Problems</p>
              <p>Playing E-sports Games</p>
            </div>
          </div>
        </div>
      </div>
      <Projects />
    </>
  );
}

type PropsType = {};

export default Main;
