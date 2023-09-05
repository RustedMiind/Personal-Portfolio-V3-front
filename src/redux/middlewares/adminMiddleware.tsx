import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import domain from "../../statics/domain";
import { adminType, setAdmin } from "../reducers/adminSlice";
import { setCookie } from "../../middlewares/cookies";
import { setTokenCookie } from "../../middlewares/setTokenCookie";

export function checkIsAdmin(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    axios
      .get<adminType>(domain("admin/check"))
      .then((res) => {
        dispatch(setAdmin({ admin: { ...res.data, isAdmin: true } }));
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
export function adminLogin(
  dispatch: Dispatch<AnyAction>,
  data: AdminRequestType
) {
  return new Promise((resolve, reject) => {
    axios
      .post<adminType>(domain("admin/login"), data)
      .then((res) => {
        dispatch(setAdmin({ admin: { ...res.data, isAdmin: true } }));
        setTokenCookie(res.data.token);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

type AdminRequestType = {
  username: string;
  password: string;
};

// type adminDataType = {
//   _id: string;
//   name: string;
//   username: string;
//   password: string;
//   createdAt: string;
//   updatedAt: string;
//   token: string;
// };
