import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import '@/shared/config/connection';
import swaggerDocs from '@/docs/swagger.json';

import router from './routes';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/', router);

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});
