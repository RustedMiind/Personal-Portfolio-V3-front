import { useContext, useState } from "react";
import { NavigationProvider } from "../../contexts/NavigationContext";
import "./navigation-effect.scss";

function NavigationEffect() {
  const [{ status }, dispatch] = useContext(NavigationProvider);
  let statusClass = "";
  switch (status) {
    case "LOADING":
      statusClass = "loading";
      break;
    case "STOPPED_LOADING":
      statusClass = "stopped";
      break;
    case "NONE":
      statusClass = "";
      break;
    default:
      statusClass = "";
      break;
  }

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
