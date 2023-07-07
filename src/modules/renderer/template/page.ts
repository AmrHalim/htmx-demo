import { User } from 'src/modules/auth';
import Header from '../pages/sections/Header';

export type PageContext = {
  user?: User;
};

type PageProps = {
  content: string;
  title: string;
  context?: PageContext;
};

export default ({ content, title, context }: PageProps) => {
  const header = Header({ user: context?.user });
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="https://unpkg.com/htmx.org@1.9.2"></script>
  </head>
  <body>
    ${header}
    ${content}
  </body>
</html>
  `;
};
