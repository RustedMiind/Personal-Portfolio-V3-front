import React, { useRef } from "react";

export const NavigationProvider = React.createContext<
  [StatusType, React.Dispatch<ActionType>]
>([{ status: "LOADING" }, () => {}]);

function NavigationContext({ children }: PropsType) {
  const [state, dispatch] = React.useReducer(reducer, { status: "NONE" });
  return (
    <NavigationProvider.Provider value={[state, dispatch]}>
      {children}
    </NavigationProvider.Provider>
  );
}

type PropsType = {
  children: JSX.Element;
};
type ActionType = {
  type: "SET_LOADING" | "SET_NOT_LOADING" | "SET_DONE";
};
type StatusType = {
  status: "LOADING" | "STOPPED_LOADING" | "NONE";
};

function reducer(state: StatusType, action: ActionType): StatusType {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, status: "LOADING" };
    case "SET_NOT_LOADING":
      return { ...state, status: "STOPPED_LOADING" };
    case "SET_DONE":
      return { ...state, status: "NONE" };
    default:
      return state;
  }
}
export default NavigationContext;
