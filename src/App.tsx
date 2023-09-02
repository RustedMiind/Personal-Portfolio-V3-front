import axios from "axios";
import "./App.scss";
import AppLayout from "./Layout";
import domain from "./statics/domain";
axios.defaults.withCredentials = true;
axios.defaults.headers.common = {
  "Access-Control-Allow-Origin": "*",
};

function App() {
  return <AppLayout />;
}

export default App;
