import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import { projectType, setProjects } from "../reducers/projectsSlice";
import domain from "../../statics/domain";

export function requestSetProjects(dispatch: Dispatch<AnyAction>) {
  console.log("Request Called");
  return new Promise((resolve, reject) => {
    axios
      .get<projectType[]>(domain("projects/all"))
      .then((res) => {
        dispatch(setProjects({ projects: res.data }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        console.log(err);
      });
  });
}
