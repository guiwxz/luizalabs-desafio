import express from 'express';

import '@/shared/config/connection';

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
