import { Form, Input, FormButton, Wrapper } from "../../../components";

const FORM_ID = "greeting_form";
const VALIDATION_TARGET = "greeting_form_errors";

const nameInput = Input({
  name: "name",
  type: "text",
  id: "name",
  placeHolder: "What's your name?",
  required: true,
  label: "Name",
});
const emailInput = Input({
  name: "email",
  type: "email",
  id: "email",
  placeHolder: "What's your email?",
  required: true,
  label: "Email",
  validator: {
    path: "/greet/validate-email",
    trigger: "change",
    target: `#${VALIDATION_TARGET}`,
  },
});
const validationWrapper = Wrapper({
  content: "",
  element: "span",
  id: VALIDATION_TARGET,
  style: "color: red; font-size: 12px;",
});

export default Form({
  id: FORM_ID,
  action: "/greet",
  content: `${nameInput}${emailInput}${validationWrapper}${FormButton({
    label: "Greet!",
  })}`,
  reserveValidationWrapper: false,
});
