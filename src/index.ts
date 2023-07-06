import app from './api';

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT ?? DEFAULT_PORT;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
