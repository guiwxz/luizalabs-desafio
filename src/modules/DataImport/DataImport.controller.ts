import { NextFunction, Request, Response } from 'express';
import { ImportsDataServices } from './DataImport.services';

export class ImportsController {
  public async create(req: Request, res: Response, next: NextFunction) {
    try {
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
