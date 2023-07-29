import { useReducer, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormType,
  doesFormContainsErrors,
  formErrorsType,
  initialFormErrors,
} from "../../middlewares/ContactFormValidation";

function ContactMeForm() {
  const [form, dispatchForm] = useReducer(formReducer, initialFormState);
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
          console.log("Form Submited");
        });
      }}
    >
      <div className="section">
        <label className={formErrors.name ? "error" : ""} htmlFor="name">
          Your Name <span>Please Enter a Correct Name</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          className={formErrors.name ? "error" : ""}
          onChange={(e) => {
            dispatchForm({ type: "NAME", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label
          className={formErrors.organization ? "error" : ""}
          htmlFor="organization"
        >
          Organization Name <span>Please Fill in the input field</span>{" "}
        </label>
        <input
          type="text"
          name="organization"
          value={form.organization}
          className={formErrors.organization ? "error" : ""}
          onChange={(e) => {
            dispatchForm({ type: "ORGANIZATION", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.email ? "error" : ""} htmlFor="email">
          Email <span>Please Enter a valid Email Address</span>
        </label>
        <input
          type="text"
          name="email"
          value={form.email}
          className={formErrors.email ? "error" : ""}
          onChange={(e) => {
            dispatchForm({ type: "EMAIL", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.phone ? "error" : ""} htmlFor="phone">
          Phone <span>Please Enter a valid Phone Number</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          className={formErrors.phone ? "error" : ""}
          onChange={(e) => {
            dispatchForm({ type: "PHONE", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.subject ? "error" : ""} htmlFor="subject">
          Subject <span>Please Enter The Subject of your message</span>
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          className={formErrors.subject ? "error" : ""}
          onChange={(e) => {
            dispatchForm({ type: "SUBJECT", payload: e.target.value });
          }}
        />
      </div>
      <div className="section">
        <label className={formErrors.message ? "error" : ""} htmlFor="message">
          Enter Your Message <span>Please Enter Your Message</span>{" "}
        </label>
        <textarea
          name="message"
          value={form.message}
          className={formErrors.message ? "error" : ""}
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

type FormActions = {
  type: ActionTypes;
  payload: string;
};

type ActionTypes =
  | "EMAIL"
  | "PHONE"
  | "NAME"
  | "MESSAGE"
  | "SUBJECT"
  | "ORGANIZATION";

export default ContactMeForm;
