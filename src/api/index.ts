import express from 'express';
import cookie_parser from 'cookie-parser';

import configureRoutes from './routes';

const PORT = 3000;

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cookie_parser());

configureRoutes(app);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
