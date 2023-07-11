import express from 'express';
import cookie_parser from 'cookie-parser';

import configureRoutes from './routes';

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cookie_parser());

configureRoutes(app);

export default app;
