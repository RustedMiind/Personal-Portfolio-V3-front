import { useEffect, useState } from "react";
import "./modal.scss";
import { XOctagon } from "react-bootstrap-icons";

function Modal(props: PropsType) {
  // const [child,setChild] = useState<ChildType>()
  const [className, setClassName] = useState<ClassesType>("hiding");
  useEffect(() => {
    setTimeout(() => {
      setClassName("showing");
    }, 10);
  }, []);
  return (
    <div className={`modal-wrapper ${className}`}>
      <div className="modal">
        <button
          className="close-btn"
          onClick={() => {
            setClassName("hiding");
            setTimeout(props.close, 1000);
          }}
        >
          <XOctagon />
        </button>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

type PropsType = {
  children: ChildType;
  close: () => void;
};

type ClassesType = "showing" | "hiding";
type ChildType = JSX.Element | null;

export default Modal;
