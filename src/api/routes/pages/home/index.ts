import express from "express";

import { homePage } from "../../../../modules/renderer";

const router = express.Router();

router.get("/", (_, res) => {
  res.send(homePage.render());
});

export default router;
