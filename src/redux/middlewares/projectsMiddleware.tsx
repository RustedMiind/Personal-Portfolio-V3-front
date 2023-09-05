import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { projectType, setProjects } from "../reducers/projectsSlice";
import domain from "../../statics/domain";

export function requestSetProjects(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<projectType[]>(domain("projects/all"))
      .then((res) => {
        dispatch(setProjects({ projects: res.data }));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
