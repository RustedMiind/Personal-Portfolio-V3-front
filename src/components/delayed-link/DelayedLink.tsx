import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavigationProvider } from "../../contexts/NavigationContext";

export default function DelayedLink({
  to,
  children,
  timing = 2200,
  ...otherProps
}: PropsTyps) {
  const [, dispatch] = useContext(NavigationProvider);
  const navigate = useNavigate();
  function delayAndGo(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    dispatch({ type: "SET_LOADING" });
    setTimeout(() => {
      navigate(to);
      setTimeout(() => {
        dispatch({ type: "SET_NOT_LOADING" });
      }, (timing / 2) * 1);
    }, (timing / 2) * 1);
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
