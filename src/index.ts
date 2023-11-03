import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';

import '@/shared/config/connection';
import swaggerDocs from '@/docs/swagger.json';

import { app } from './app';
import mongoose from 'mongoose';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/healthcheck', async (_req, res) => {
  const isDatabaseRunning = mongoose.connection.readyState === 1;

  return res.json({ database: isDatabaseRunning ? 'up' : 'down', api: 'up' });
});

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
