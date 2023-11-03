import { z } from 'zod';
import { listOrdersSchema } from './Orders.rules';

export type ListOrdersServicePayload = {
  orderId?: number;
  finalDate?: Date;
  initialDate?: Date;
};

export type ListOrdersServiceReturn = {
  user_id: number;
  name: string;
  orders: {
    order_id: number;
    date: string;
    products: {
      product_id: number;
      value: string;
    }[];
  }[];
};

export type ListOrdersRequestQuery = z.infer<
  typeof listOrdersSchema.shape.query
>;
