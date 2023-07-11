import express from 'express';

import { validateEmail } from '../../../modules/validator';
import {
  authenticate,
  login,
  AUTH_COOKIE_NAME,
  logout,
  register,
  persistAuthToken,
  userExists,
} from '../../../modules/auth';
import { auth } from '../../../modules/renderer';

import { redirect } from '../helpers';

const router = express.Router();

router.get('/register', (req, res) => {
  if (authenticate(req)) {
    return res.redirect('/');
  }

  return res.send(auth.renderRegister());
});

router.get('/login', (req, res) => {
  if (authenticate(req)) {
    return res.redirect('/');
  }

  return res.send(auth.renderLogin());
});

router.post('/logout', (req, res) => {
  logout(authenticate(req)?.token);

  res.clearCookie(AUTH_COOKIE_NAME);
  return redirect(res, '/');
});

router.post('/login', (req, res) => {
  if (!validateEmail(req.body.email)) {
    return res.send(
      auth.formErrors({
        errors: ['Please enter a valid email!'],
      }),
    );
  }

  const user = login(req.body);
  if (user?.token) {
    persistAuthToken(res, user.token);
    return redirect(res, '/');
  }

  res.send(
    auth.formErrors({
      errors: ['Wrong Credentials! Make sure your email and password are correct.'],
    }),
  );
});

router.post('/register', (req, res) => {
  const errors = [];
  if (!validateEmail(req.body.email)) {
    errors.push('Please enter a valid email.');
  }
  if (!req.body.name) {
    errors.push('Please enter your name.');
  }
  if (userExists(req.body)) {
    errors.push('User already exists. Try another email.');
  }

  if (errors.length) {
    return res.send(
      auth.formErrors({
        errors,
      }),
    );
  }

  const user = register(req.body);
  if (!user?.token) {
    return res.send(auth.formErrors({ errors: ["We can't complete your registration request now, try again later."] }));
  }

  persistAuthToken(res, user.token);
  return redirect(res, '/');
});

export default router;
