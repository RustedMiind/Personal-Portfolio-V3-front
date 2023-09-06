import axios from "axios";
import { projectSendType, projectType } from "../redux/reducers/projectsSlice";
import domain from "../statics/domain";

function AddNewProject(project: projectSendType) {
  return new Promise((ressolve, reject) => {
    axios.post(domain("projects/new"), project).then(ressolve).catch(reject);
  });
}

function DeleteProject(id: string) {
  return new Promise((ressolve, reject) => {
    axios
      .delete(domain(`projects/${id}`))
      .then(ressolve)
      .catch(reject);
  });
}

export { AddNewProject, DeleteProject };
