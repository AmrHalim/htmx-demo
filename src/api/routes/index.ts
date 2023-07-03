import { Application } from "express";

import home from "./pages/home";
import notFound from "./pages/notFound";
import greet from "./greeting";

export default (app: Application) => {
  app.use("/", home);

  app.use("/greet", greet);

  app.use("*", notFound);
};
