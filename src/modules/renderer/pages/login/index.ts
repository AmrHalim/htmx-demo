import { Wrapper } from "src/modules/ui";
import page from "../../template/page";
import LoginForm from "./sections/LoginForm";

export const render = () =>
  page({
    title: "The Greeter App | Login",
    content: Wrapper({
      content: LoginForm,
      style:
        "display: flex; flex-direction: column; justify-content: center; align-items: center;",
    }),
  });

export { default as loginFormErrors } from "./sections/LoginFormErrors";
