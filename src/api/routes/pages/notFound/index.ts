import express from "express";

import { notFound } from "src/modules/renderer";
import { authenticate } from "src/modules/auth";

const router = express.Router();

router.get("*", (req, res) => {
  res.send(notFound.render({ user: authenticate(req) }));
});

export default router;
