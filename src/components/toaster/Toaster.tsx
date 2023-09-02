import "./toaster.scss";
import { useEffect, useState } from "react";
import {
  CheckCircleFill,
  ExclamationTriangleFill,
  XCircle,
  XOctagonFill,
} from "react-bootstrap-icons";

function Toaster({ toaster }: PropsType) {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const [willHide, setWillHide] = useState(false);
  if (willHide) {
    setTimeout(() => {
      setVisible(false);
    }, 1000);
  }
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      setTimeout(() => {
        setWillHide(true);
      }, 2000);
    }, 10);
  }, []);
  if (visible)
    return (
      <div
        className={`toaster ${show ? "show" : ""} ${toaster.status} ${
          willHide ? "will-hide" : ""
        }`}
      >
        <div className="icon-container">
          {toaster.status === "error" && <XOctagonFill />}
          {toaster.status === "success" && <CheckCircleFill />}
          {toaster.status === "warning" && <ExclamationTriangleFill />}
        </div>
        <div className="content">{toaster.message}</div>
        <div
          className="close-btn"
          onClick={() => {
            setWillHide(true);
          }}
        >
          <XCircle />
        </div>
      </div>
    );
  else {
    return <></>;
  }
}

type PropsType = {
  toaster: ToasterType;
};

type ToasterType = {
  status: "error" | "warning" | "success" | "message";
  message: string;
  timeout?: number;
};

export default Toaster;
