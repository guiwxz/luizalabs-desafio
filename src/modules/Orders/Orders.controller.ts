import { NextFunction, Request, Response } from 'express';
import { OrdersServices } from './Orders.services';

export class OrdersController {
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      const { order_id, finalDate, initialDate } = req.query;
      const ordersServices = new OrdersServices();

      const orders = await ordersServices.listOrders({
        order_id: order_id ? Number(order_id) : undefined,
        initialDate: initialDate ? new Date(initialDate as string) : undefined,
        finalDate: finalDate ? new Date(finalDate as string) : undefined,
      });

      return res.status(200).json({ data: orders });
    } catch (error) {
      next(error);
    }
  }
}
