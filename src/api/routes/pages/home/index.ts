import express from 'express';

import { homePage } from 'src/modules/renderer';
import { authenticate } from 'src/modules/auth';

const router = express.Router();

router.get('/', (req, res) => {
  const user = authenticate(req);
  if (user) {
    return res.send(homePage.render({ user }));
  }
  res.redirect('/auth/login');
});

export default router;
