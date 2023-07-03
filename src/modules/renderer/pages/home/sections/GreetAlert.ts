import { Alert } from "../../../components";

export default ({ name, email }: { name: string; email: string }) =>
  Alert({
    title: `Hi, ${name}! Your email address is ${email}! Welcome to the system!`,
  });
