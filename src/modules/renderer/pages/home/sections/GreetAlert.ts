import { Alert } from "../../../components";

export default ({ name, email }: { name: string; email: string }) =>
  Alert({ title: `Hi, ${name}! New emails will be sent to ${email}!` });
