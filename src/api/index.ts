import express from "express";

import configureRoutes from "./routes";

const PORT = 3000;

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

configureRoutes(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
