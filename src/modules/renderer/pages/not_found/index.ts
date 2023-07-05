import { Heading, Wrapper } from "src/modules/ui";
import page, { PageContext } from "../../template/page";

export const render = ({ user }: PageContext) =>
  page({
    title: "Not Found!",
    content: Wrapper({
      content: Heading({
        label: "Page Not Found!",
      }),
      style: "display: flex; justify-content: center; align-items:center;",
    }),
    context: { user },
  });
