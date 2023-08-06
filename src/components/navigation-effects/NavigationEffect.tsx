import { useContext, useEffect, useState } from "react";
import { NavigationProvider } from "../../contexts/NavigationContext";
import "./navigation-effect.scss";

function NavigationEffect() {
  const [{ status }, dispatch] = useContext(NavigationProvider);
  let [statusClass, setStatusClass] = useState("loading");

  useEffect(() => {
    switch (status) {
      case "LOADING":
        setStatusClass("loading");
        break;
      case "STOPPED_LOADING":
        setStatusClass("stopped");
        break;
      case "NONE":
        setStatusClass("stopped");
        break;
      default:
        setStatusClass("");
        break;
    }
  }, [status]);
  return (
    <div className={"navigation-effect " + statusClass}>
      <div className="effect-page" id="pg1"></div>
      <div className="effect-page" id="pg2"></div>
      <div className="effect-page" id="pg3"></div>
      <div className="effect-page" id="pg4"></div>
      <div className="effect-page" id="pg5"></div>
    </div>
  );
}

export default NavigationEffect;
