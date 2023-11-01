import 'dotenv/config';
import express from 'express';

import '@/shared/config/connection';

import router from './routes';

const app = express();

app.use(express.json());
app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
