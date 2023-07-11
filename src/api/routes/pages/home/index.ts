import express from 'express';

import { homePage } from '../../../../modules/renderer';
import { authenticate } from '../../../../modules/auth';

const router = express.Router();

router.get('/', (req, res) => {
  const user = authenticate(req);
  if (user) {
    return res.send(homePage.render({ user }));
  }

  res.redirect('/auth/login');
});

export default router;
