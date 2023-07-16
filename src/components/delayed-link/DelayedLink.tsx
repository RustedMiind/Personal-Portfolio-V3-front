import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigationProvider } from "../../contexts/NavigationContext";

export default function DelayedLink({
  to,
  children,
  timing = 4000,
  ...otherProps
}: PropsTyps) {
  const [, dispatch] = useContext(NavigationProvider);
  const history = useNavigate();
  function delayAndGo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    console.log("Case 1---");
    setTimeout(() => {
      history(to);
      dispatch({ type: "SET_NOT_LOADING" });
      console.log("Case 2------");
      setTimeout(() => {
        dispatch({ type: "SET_DONE" });
        console.log("Case 3---------");
      }, timing / 2);
    }, timing / 2);
  }

  return (
    <Link to={to} onClick={delayAndGo} {...otherProps}>
      {children}
    </Link>
  );
}

interface PropsTyps extends React.AnchorHTMLAttributes<{}> {
  to: string;
  timing?: number;
}
