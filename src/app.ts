import 'dotenv/config';
import express from 'express';

import router from './routes';
import { handleError } from './shared/errors/handleError';

const app = express();

app.use(express.json());
app.use('/', router);

app.use(handleError);

export { app };
