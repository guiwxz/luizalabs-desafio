import {
  ParseDataServicePayload,
  ParsedData,
  KeyMap,
  OrderToCreate,
  UserToCreate,
} from './DataImport.types';
import { OrderModel } from '@/models/Order';
import { UserModel } from '@/models/User';

export class ImportsDataServices {
  public parseData(data: ParseDataServicePayload): ParsedData[] {
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    return lines.map((line) => ({
      userId: Number(line.substring(0, 10).trim()),
      userName: line.substring(10, 55).trim(),
      orderId: Number(line.substring(55, 65).trim()),
      productId: Number(line.substring(65, 75).trim()),
      value: Number(line.substring(75, 87).trim()).toFixed(2).toString(),
      date: new Date(
        line
          .substring(87, 95)
          .trim()
          .replace(/^(\d{4})(\d{2})(\d{2})$/, '$1-$2-$3'),
      ),
    }));
  }

  public async saveData(parsedData: ParsedData[]): Promise<void> {
    const orders: KeyMap<OrderToCreate> = {};
    const users: KeyMap<UserToCreate> = {};

    for (const order of parsedData) {
      const { date, orderId, productId, userId, userName, value } = order;

      if (!users[userId]) {
        users[userId] = {
          user_id: userId,
          name: userName,
        };
      }

      if (!orders[orderId]) {
        orders[orderId] = {
          order_id: orderId,
          user_id: userId,
          total: Number(value).toFixed(2).toString(),
          date,
          products: [
            {
              product_id: productId,
              value: value,
            },
          ],
        };
      } else {
        orders[orderId].products.push({
          product_id: productId,
          value: value,
        });

        const orderTotal = Number(orders[orderId].total);

        orders[orderId].total = (orderTotal + Number(value))
          .toFixed(2)
          .toString();
      }
    }

    const ordersFormatedData = Object.values(orders);

    const { upsertedIds } = await OrderModel.collection.bulkWrite(
      ordersFormatedData.map((order) => ({
        updateOne: {
          filter: { order_id: order.order_id },
          update: { $set: order },
          upsert: true,
        },
      })),
    );

    const ids = Object.values(upsertedIds);

    const createdOrders = await OrderModel.find({ _id: { $in: ids } });

    if (createdOrders.length !== 0) {
      await UserModel.collection.bulkWrite(
        createdOrders.map((order) => ({
          updateOne: {
            filter: { user_id: order.user_id },
            update: {
              $setOnInsert: {
                user_id: users[order.user_id!].user_id,
                name: users[order.user_id!].name,
              },
              $push: { orders: order._id } as any,
            },
            upsert: true,
          },
        })),
      );
    }
  }
}
