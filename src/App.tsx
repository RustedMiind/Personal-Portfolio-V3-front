import axios from "axios";
import "./App.scss";
import AppLayout from "./Layout";
import { getCookie } from "./middlewares/cookies";
import { setTokenHeader } from "./middlewares/setTokenCookie";
// axios.defaults.withCredentials = true;
setTokenHeader();

function App() {
  return <AppLayout />;
}

export default App;
