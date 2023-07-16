import "./projects.scss";
import ProjectCard from "../../components/project-card/ProjectCard";
import { useState } from "react";

function Projects() {
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState(false);
  return (
    <div className="projects-view" id="view">
      <div className={`imageOnHover  ${display ? "active" : ""}`}>
        <div
          className="innerImage"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
      <div className="projects-container">
        <h2>My Projects</h2>
        <ProjectCard
          imgUrl="https://ali-soliman.web.app/img/spotify_clone_project.png"
          imageState={[image, setImage]}
          display={[display, setDisplay]}
          content={{
            title: "Spotify Clone",
            describtion: "Spotify Clone Prooject",
            github: "https://github.com/RustedMiind/Spotify-Clone",
            live: "https://spotify-clonex.web.app/",
          }}
        />
      </div>
    </div>
  );
}

export default Projects;
