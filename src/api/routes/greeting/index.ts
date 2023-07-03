import express from "express";

import { homePage } from "../../../modules/renderer";
import { validateEmail } from "../../../modules/validator";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email } = req.body;
  res.send(
    homePage.GreetAlert({
      name,
      email,
    })
  );
});

router.post("/validate-email", (req, res) => {
  const { email } = req.body;
  if (!validateEmail(email)) {
    return res.send(
      homePage.WelcomeFormValidationErrors({
        errors: ["Please enter a valid email!"],
      })
    );
  }
  return res.send("");
});

export default router;
