import { Form, Input, FormButton } from "../../../components";
import { makeValidationWrapper } from "../../../components/Form";

const FORM_ID = "greeting_form";

const { element: validationWrapper, id: VALIDATION_TARGET } =
  makeValidationWrapper({
    target: FORM_ID,
  });
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

export default Form({
  id: FORM_ID,
  action: "/greet",
  children: [
    nameInput,
    emailInput,
    validationWrapper,
    FormButton({
      label: "Greet!",
    }),
  ],
  reserveValidationWrapper: false,
});
