import { Wrapper } from "../../components";
import page, { PageContext } from "../../template/page";

import WelcomeHeader from "./sections/WelcomeHeader";
import GreetAlert from "./sections/GreetAlert";

export const render = ({ user }: PageContext) => {
  const GreetUser = user ? GreetAlert(user) : "";

  return page({
    title: "The Greeter App!",
    content: Wrapper({
      content: `${WelcomeHeader}${GreetUser}`,
      style:
        "display: flex; flex-direction: column; justify-content: center; align-items: center;",
    }),
    context: { user },
  });
};

export { default as GreetAlert } from "./sections/GreetAlert";
