import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';

import '@/shared/config/connection';
import swaggerDocs from '@/docs/swagger.json';

import { app } from './app';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
