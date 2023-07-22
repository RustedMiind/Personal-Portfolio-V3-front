import validator from "validator";

export type FormType = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type formErrorsType = {
  name: boolean;
  organization: boolean;
  email: boolean;
  phone: boolean;
  subject: boolean;
  message: boolean;
};

export function doesFormContainsErrors(form: FormType): formErrorsType | false {
  let formErrors: formErrorsType = initialFormErrors;
  let cleanForm = true;
  formErrors.name = !form.name;
  formErrors.email = !validator.isEmail(form.email);
  formErrors.phone = !validator.isMobilePhone(form.phone);
  formErrors.message = !form.message;
  formErrors.subject = !form.subject;
  for (let i in formErrors) {
    const key = i as keyof formErrorsType;
    if (formErrors[key]) {
      cleanForm = false;
      break;
    }
  }
  // console.log("is clean form: ", cleanForm);
  return cleanForm ? false : formErrors;
}

export const initialFormErrors: formErrorsType = {
  name: false,
  organization: false,
  email: false,
  phone: false,
  subject: false,
  message: false,
};
