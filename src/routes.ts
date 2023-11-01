import { Router } from 'express';

import dataImportRouter from '@/modules/DataImport/DataImport.routes';
import ordersRouter from '@/modules/Orders/Orders.routes';

const router = Router();

router.use('/import', dataImportRouter);
router.use('/orders', ordersRouter);

export default router;
