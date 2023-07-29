import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import domain from "../../statics/domain";
import { adminType, setAdmin } from "../reducers/adminSlice";

export function checkIsAdmin(dispatch: Dispatch<AnyAction>) {
  console.log("Request Called");
  return new Promise((resolve, reject) => {
    axios
      .get<adminType>(domain("admin/check"))
      .then((res) => {
        dispatch(setAdmin({ admin: { ...res.data, isAdmin: true } }));
        resolve(res.data);
        console.log(res);
      })
      .catch((err) => {
        reject(err);
        console.log("Error", err);
      });
  });
}
