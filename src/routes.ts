import { Router } from 'express';

import dataImportRouter from '@/modules/DataImport/DataImport.routes';

const router = Router();

router.use('/import', dataImportRouter);

export default router;
