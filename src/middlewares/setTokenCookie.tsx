import axios from "axios";
import { getCookie, setCookie } from "./cookies";

function setTokenHeader() {
  axios.defaults.headers.common = {
    token: getCookie("token"),
  };
}

function setTokenCookie(token: string) {
  setCookie("token", token, 31);
  setTokenHeader();
}

export { setTokenHeader, setTokenCookie };
