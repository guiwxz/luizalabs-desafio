import { NextFunction, Request, Response } from 'express';
import { ImportsDataServices } from './DataImport.services';
import { AppError } from '@/shared/errors/AppErrors';

export class ImportsController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      if (!req.file) {
        throw new AppError('Nenhum arquivo importado', 400);
      }
      if (req.file.mimetype !== 'text/plain') {
        throw new AppError('Tipo de arquivo não permitido', 400);
      }

      const importDataService = new ImportsDataServices();

      const file = req.file!;

      const data = file.buffer.toString('utf-8');

      const parsedData = importDataService.parseData(data);

      await importDataService.saveData(parsedData);

      return res
        .status(201)
        .json({ message: 'Arquivos processados com sucesso.' });
    } catch (error) {
      next(error);
    }
  }
}
