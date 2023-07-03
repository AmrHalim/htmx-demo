import express from "express";

import { loginPage } from "../../../modules/renderer";
import { validateEmail } from "../../../modules/validator";
import { authenticate, login, AUTH_COOKIE_NAME } from "../../../modules/auth";

import { redirect } from "../helpers";

const router = express.Router();

router.get("/login", (req, res) => {
  if (authenticate(req)) {
    return res.redirect("/");
  }

  res.send(loginPage.render());
});

router.post("/logout", (_, res) => {
  res.clearCookie(AUTH_COOKIE_NAME);
  return res.send(redirect("/"));
});

router.post("/login", (req, res) => {
  if (!validateEmail(req.body.email)) {
    return res.send(
      loginPage.loginFormErrors({
        errors: ["Please enter a valid email!"],
      })
    );
  }

  const user = login(req.body);
  if (user) {
    res.cookie("AUTH_TOKEN", user.token);
    res.send(redirect("/"));
  } else {
    res.send(
      loginPage.loginFormErrors({
        errors: [
          "Wrong Credentials! Make sure your email and password are correct.",
        ],
      })
    );
  }
});

export default router;
