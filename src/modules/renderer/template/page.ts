type PageProps = {
  content: string;
  title: string;
};

export default ({ content, title }: PageProps) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <script src="https://unpkg.com/htmx.org@1.9.2"></script>
  </head>
  <body>
    ${content}
  </body>
</html>
`;
