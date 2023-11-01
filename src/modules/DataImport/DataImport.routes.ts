import { Router } from 'express';
import multer from 'multer';
import { validateReq } from '@/shared/utils/validateRequest';
import { importFileSchema } from './DataImport.rules';
import { ImportsController } from './DataImport.controller';

const multerConfig = multer();
const dataImportRouter = Router();

const dataImportsController = new ImportsController();

dataImportRouter.post(
  '/',
  multerConfig.single('file'),
  validateReq(importFileSchema),
  dataImportsController.create,
);

export default dataImportRouter;
