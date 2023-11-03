import { UserModel } from '@/models/User';
import {
  ListOrdersServicePayload,
  ListOrdersServiceReturn,
} from './Orders.types';
import { FilterQuery } from 'mongoose';

export class OrdersServices {
  public async listOrders(
    filtersPayload: ListOrdersServicePayload,
  ): Promise<ListOrdersServiceReturn[]> {
    const { finalDate, initialDate, orderId } = filtersPayload;

    const filters: FilterQuery<typeof UserModel> = {};

    if (orderId) {
      filters['orders.order_id'] = Number(orderId);
    }

    if (initialDate && finalDate) {
      filters['orders.date'] = {
        $gte: initialDate,
        $lte: finalDate,
      };
    }

    const orders = await UserModel.aggregate([
      {
        $lookup: {
          from: 'orders',
          localField: 'orders',
          foreignField: '_id',
          as: 'orders',
        },
      },
      {
        $unwind: '$orders',
      },
      {
        $match: filters,
      },
      {
        $group: {
          _id: '$_id',
          otherFields: { $first: '$$ROOT' },
          orders: { $push: '$orders' },
        },
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: ['$otherFields', { orders: '$orders' }],
          },
        },
      },
      {
        $project: {
          _id: false,
          orders: {
            _id: false,
            user_id: false,
          },
        },
      },
    ]);

    return orders;
  }
}
