import { useReducer, useState } from "react";
import "./projects-managements.scss";
import { AddNewProject } from "../../../../methods/ProjectsMethods";
import { projectSendType } from "../../../../redux/reducers/projectsSlice";
import Toaster from "../../../../components/toaster/Toaster";
import DeleteProjectPage from "./delete-project/DeleteProject";
import { useDispatch } from "react-redux";
import { requestSetProjects } from "../../../../redux/middlewares/projectsMiddleware";

type FormValues = projectSendType;

interface Action {
  type: string;
  field?: string;
  value?: string;
}

const initialState: FormValues = {
  name: "",
  describtion: "",
  image: "",
  github: "",
  url: "",
};

const formReducer = (state: FormValues, action: Action): FormValues => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field as string]: action.value };
    case "RESET_FORM":
      return initialState;
    default:
      return state;
  }
};

function ProjectsManagments() {
  const [formValues, dispatch] = useReducer(formReducer, initialState);
  const [formStatus, setFormStatus] = useState<"error" | "success" | "">("");
  const stateDispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "SET_FIELD",
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Do something with formValues
    AddNewProject(formValues)
      .then((result) => {
        dispatch({ type: "RESET_FORM" });
        requestSetProjects(stateDispatch);
        setFormStatus("success");
        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      })
      .catch((err) => {
        setFormStatus("error");
        setTimeout(() => {
          setFormStatus("");
        }, 3000);
      });
  };

  return (
    <div className="projects-managments">
      {formStatus === "error" && (
        <Toaster
          toaster={{ status: "error", message: "Error Saving Project" }}
        />
      )}
      {formStatus === "success" && (
        <Toaster
          toaster={{ status: "success", message: "Project Added Successfully" }}
        />
      )}
      <div className="add-new-project">
        <h3>Add New Project</h3>
        <form className="projects-managements-form" onSubmit={handleSubmit}>
          <div className="input-section">
            <label htmlFor="name">Project name</label>
            <input
              value={formValues.name}
              onChange={handleChange}
              type="text"
              name="name"
              className="input-main"
            />
          </div>
          <div className="input-section">
            <label htmlFor="describtion">Project describtion</label>
            <textarea
              value={formValues.describtion}
              name="describtion"
              onChange={(e: any) => {
                handleChange(e);
              }}
              className="input-main"
            />
          </div>
          <div className="input-section">
            <label htmlFor="github">Project Github</label>
            <input
              value={formValues.github}
              name="github"
              onChange={handleChange}
              type="text"
              className="input-main"
            />
          </div>
          <div className="input-section">
            <label htmlFor="url">Project url</label>
            <input
              value={formValues.url}
              name="url"
              onChange={(e: any) => {
                handleChange(e);
              }}
              className="input-main "
            />
          </div>
          <div className="input-section">
            <label htmlFor="image">Project image</label>
            <input
              value={formValues.image}
              name="image"
              onChange={handleChange}
              type="text"
              className="input-main"
            />
          </div>
          <div className="input-section">
            <button className="btn-main">Submit</button>
          </div>
        </form>
        <DeleteProjectPage />
      </div>
    </div>
  );
}

export default ProjectsManagments;
