import "./projects.scss";
import ProjectCard from "../../components/project-card/ProjectCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { requestSetProjects } from "../../redux/middlewares/projectsMiddleware";
import { projectType } from "../../redux/reducers/projectsSlice";

function Projects() {
  const [image, setImage] = useState("");
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    requestSetProjects(dispatch);
  }, []);
  const projects = useSelector((state: { projects: projectType[] }) => {
    return state.projects;
  });
  return (
    <div /* className="projects-view" */ id="view">
      <div className={`imageOnHover  ${display ? "active" : ""}`}>
        <div
          className="innerImage"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
      </div>
      <div className="projects-container">
        <h2>My Projects</h2>

        {projects &&
          projects[0] &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              imgUrl={project.image}
              imageState={[image, setImage]}
              display={[display, setDisplay]}
              content={{
                title: project.name,
                describtion: project.describtion,
                github: project.github,
                live: project.url,
              }}
            />
          ))}
      </div>
    </div>
  );
}

export default Projects;
