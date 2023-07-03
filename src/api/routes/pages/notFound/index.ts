import express from "express";

import { notFound } from "../../../../modules/renderer";

const router = express.Router();

router.get("*", (_, res) => {
  res.send(notFound.render());
});

export default router;
