import { Router } from 'express';
import multer from 'multer';
import { ImportsController } from './DataImport.controller';

const multerConfig = multer();

const dataImportRouter = Router();

const dataImportsController = new ImportsController();

dataImportRouter.post(
  '/',
  multerConfig.single('file'),
  dataImportsController.create,
);

export default dataImportRouter;
