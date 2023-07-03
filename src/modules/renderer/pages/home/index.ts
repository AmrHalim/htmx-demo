import { Wrapper } from "../../components";
import page from "../../template/page";

import WelcomeHeader from "./sections/WelcomeHeader";
import GreetingForm from "./sections/GreetingForm";

export const render = () =>
  page({
    title: "The Greeter App!",
    content: Wrapper({
      content: `${WelcomeHeader}${GreetingForm}`,
      style:
        "display: flex; flex-direction: column; justify-content: center; align-items: center;",
    }),
  });

export { default as GreetAlert } from "./sections/GreetAlert";
export { default as WelcomeFormValidationErrors } from "./sections/WelcomeFormValidationErrors";
