import { useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormType,
  doesFormContainsErrors,
  formErrorsType,
  initialFormErrors,
} from "../../middlewares/ContactFormValidation";
import domain from "../../statics/domain";
import Loader from "../../components/loader/Loader";
import Toaster from "../../components/toaster/Toaster";

function ContactMeForm() {
  const [form, dispatchForm] = useReducer(formReducer, initialFormState);
  const [status, setStatus] = useState<"none" | "sent" | "sending" | "error">(
    "none"
  );
  const [formErrors, setFormErrors] =
    useState<formErrorsType>(initialFormErrors);

  const submitHandler = (submitIt: () => any) => {
    const containsErrors = doesFormContainsErrors(form);
    if (!containsErrors) {
      setFormErrors(initialFormErrors);
      submitIt();
    } else {
      setFormErrors(containsErrors);
    }
    dispatchForm({ type: "ORGANIZATION", payload: form.organization });
  };
  return (
    <form
      className="contact-me-form"
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(() => {
          setStatus("sending");
          axios
            .post(domain("messages/new"), form)
            .then((res) => {
              setStatus("sent");
              dispatchForm({ type: "RESET" });
            })
            .catch((err) => {
              setStatus("error");
            });
        });
      }}
    >
      {status === "sending" && <Loader />}
      {status === "sent" && (
        <Toaster
          toaster={{
            status: "success",
            message: "Message Sent Succesfully",
          }}
        />
      )}
      {status === "error" && (
        <Toaster
          toaster={{ status: "error", message: "Error Sending Message" }}
        />
      )}
      {status === "sending" && <Loader />}
      <div className="section">
        <label className={` ${formErrors.name ? "error" : ""}`} htmlFor="name">
          Your Name <span>Please Enter a Correct Name</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder={"Your Name"}
          value={form.name}
          className={`input-main ${formErrors.name ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "NAME", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={` ${formErrors.organization ? "error" : ""}`}
          htmlFor="organization"
        >
          Organization Name <span>Please Fill in the input field</span>{" "}
        </label>
        <input
          type="text"
          name="organization"
          placeholder={"Organization Name"}
          value={form.organization}
          className={`input-main ${formErrors.organization ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "ORGANIZATION", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={` ${formErrors.email ? "error" : ""}`}
          htmlFor="email"
        >
          Email <span>Please Enter a valid Email Address</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder={"Email"}
          value={form.email}
          className={`input-main ${formErrors.email ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "EMAIL", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={` ${formErrors.phone ? "error" : ""}`}
          htmlFor="phone"
        >
          Phone <span>Please Enter a valid Phone Number</span>
        </label>
        <input
          type="tel"
          name="phone"
          placeholder={"Phone"}
          value={form.phone}
          className={`input-main ${formErrors.phone ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "PHONE", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={` ${formErrors.subject ? "error" : ""}`}
          htmlFor="subject"
        >
          Subject <span>Please Enter The Subject of your message</span>
        </label>
        <input
          type="text"
          name="subject"
          placeholder={"Subject"}
          value={form.subject}
          className={`input-main ${formErrors.subject ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "SUBJECT", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={` ${formErrors.message ? "error" : ""}`}
          htmlFor="message"
        >
          Enter Your Message <span>Please Enter Your Message</span>{" "}
        </label>
        <textarea
          name="message"
          placeholder={"Email"}
          value={form.message}
          className={`input-main ${formErrors.message ? "error" : ""}`}
          onChange={(e) => {
            dispatchForm({ type: "MESSAGE", payload: e.target.value });
          }}
        />
      </div>
      <div className="submit">
        <input type="submit" value={"Send"} />
      </div>
    </form>
  );
}

function formReducer(state: FormType, action: FormActions): FormType {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.payload };
    case "ORGANIZATION":
      return { ...state, organization: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PHONE":
      return { ...state, phone: action.payload };
    case "SUBJECT":
      return { ...state, subject: action.payload };
    case "MESSAGE":
      return { ...state, message: action.payload };
    case "RESET":
      return initialFormState;
    default:
      return state;
  }
}

const initialFormState = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

type FormActions =
  | {
      type: ActionTypes;
      payload: string;
    }
  | { type: "RESET" };

type ActionTypes =
  | "EMAIL"
  | "PHONE"
  | "NAME"
  | "MESSAGE"
  | "SUBJECT"
  | "ORGANIZATION";

export default ContactMeForm;
