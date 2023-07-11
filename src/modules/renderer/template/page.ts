import { User } from '../../../modules/auth';
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
  const styles = loadMainStyles(context?.styling?.mode);
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="https://unpkg.com/htmx.org@1.9.2"></script>
    ${styles}
  </head>
  <body>
    <div id="app">
      ${header}
      ${content}
    </div>
  </body>
</html>
  `;
};
