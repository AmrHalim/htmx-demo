import { Application } from "express";

import home from "./pages/home";
import notFound from "./pages/notFound";
import auth from "./auth";

export default (app: Application) => {
  app.use("/", home);

  app.use("/auth", auth);

  app.use("*", notFound);
};
