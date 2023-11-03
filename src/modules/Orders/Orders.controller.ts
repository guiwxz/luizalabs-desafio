import { NextFunction, Request, Response } from 'express';
import { OrdersServices } from './Orders.services';
import { ListOrdersRequestQuery } from './Orders.types';

export class OrdersController {
  public async index(
    req: Request<unknown, unknown, unknown, ListOrdersRequestQuery>,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const { orderId, finalDate, initialDate } = req.query;
      const ordersServices = new OrdersServices();

      const orders = await ordersServices.listOrders({
        orderId: orderId ? Number(orderId) : undefined,
        initialDate: initialDate ? new Date(initialDate as string) : undefined,
        finalDate: finalDate ? new Date(finalDate as string) : undefined,
      });

      return res.status(200).json({ data: orders });
    } catch (error) {
      next(error);
    }
  }
}
