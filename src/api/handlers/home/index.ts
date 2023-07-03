import GreetAlert from "../../../modules/renderer/pages/home/sections/GreetAlert";

type GreetUserProps = {
  name: string;
  email: string;
};

export const greetUser = ({ name, email }: GreetUserProps) =>
  GreetAlert({
    name,
    email,
  });
