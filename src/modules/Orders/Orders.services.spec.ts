import { OrdersServices } from './Orders.services';
import { UserModel } from '@/models/User';
import { OrderModel } from '@/models/Order';
import { ordersData, usersData } from '../../test/mocks/ordersData';
import { setupDB } from '@/test/dbSetup';

describe('ListOrders Service', () => {
  setupDB();

  test('should return orders', async () => {
    await OrderModel.insertMany(ordersData);
    await UserModel.insertMany(usersData);

    const ordersServices = new OrdersServices();
    const orders = await ordersServices.listOrders({});

    expect(orders).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          user_id: expect.any(Number),
          name: expect.any(String),
          orders: expect.any(Array),
        }),
      ]),
    );
  });

  test('should return orders with id', async () => {
    await OrderModel.insertMany(ordersData);
    await UserModel.insertMany(usersData);

    const orderId = 753;

    const ordersServices = new OrdersServices();
    const orders = await ordersServices.listOrders({
      orderId,
    });

    expect(orders).toContainEqual(
      expect.objectContaining({
        user_id: expect.any(Number),
        name: expect.any(String),
        orders: expect.arrayContaining([
          expect.objectContaining({ order_id: orderId }),
        ]),
      }),
    );
  });

  test('should return orders with date', async () => {
    await OrderModel.insertMany(ordersData);
    await UserModel.insertMany(usersData);

    const initialDate = new Date('2021-10-27');
    const finalDate = new Date('2021-10-29');

    const ordersServices = new OrdersServices();
    const orders = await ordersServices.listOrders({
      initialDate,
      finalDate,
    });

    expect(
      orders.every((order) =>
        order.orders.every(
          ({ date }) =>
            new Date(date) >= initialDate && new Date(date) <= finalDate,
        ),
      ),
    ).toBe(true);
  });
});
