import { User } from '../../../modules/auth';
import { Theme, loadMainStyles } from '../../../modules/style';
import Header from '../pages/sections/Header';

export type PageContext = {
  user?: User;
  styling?: {
    theme: Theme;
  };
};

type PageProps = {
  content: string;
  title: string;
  context?: PageContext;
};

export default ({ content, title, context }: PageProps) => {
  const header = Header({ user: context?.user });
  const styles = loadMainStyles(context?.styling?.theme);
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="https://unpkg.com/htmx.org@1.9.2"></script>
    <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
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
