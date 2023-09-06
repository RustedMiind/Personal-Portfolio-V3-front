import { useDispatch, useSelector } from "react-redux";
import { projectsStateType } from "../../../../../redux/reducers/projectsSlice";
import { DeleteProject } from "../../../../../methods/ProjectsMethods";
import { useEffect } from "react";
import { requestSetProjects } from "../../../../../redux/middlewares/projectsMiddleware";

function DeleteProjectPage() {
  const projects = useSelector((state: projectsStateType) => state.projects);

  const dispatch = useDispatch();
  useEffect(() => {
    requestSetProjects(dispatch).then(console.log);
  }, []);

  return (
    <div className="delete-project-cotnainer">
      {projects &&
        projects[0] &&
        projects.map((project) => (
          <div className="project">
            <h4 className="title">{project.name}</h4>
            <p>{project.describtion}</p>
            <button
              className="btn-main"
              onClick={() => {
                DeleteProject(project._id).then(() => {
                  requestSetProjects(dispatch);
                });
              }}
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
}

export default DeleteProjectPage;
