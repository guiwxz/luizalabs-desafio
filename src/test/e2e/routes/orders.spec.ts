import { app } from '@/app';
import { OrderModel } from '@/models/Order';
import { UserModel } from '@/models/User';
import { ordersData, usersData } from '@/test/mocks/ordersData';
import { setupDB } from '@/test/dbSetup';
import request from 'supertest';

describe('GET /orders', () => {
  setupDB();

  test('should return with success', async () => {
    await OrderModel.insertMany(ordersData);
    await UserModel.insertMany(usersData);

    const response = await request(app)
      .get('/orders')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(2);
  });

  test('should return an error', async () => {
    request(app)
      .get('/orders?orderId=xyz')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(400)
      .then((response) => {
        expect(response.body.error.message).toBe(
          'Expected number, received nan',
        );
      });
  });

  test('should return data with filters', async () => {
    await OrderModel.insertMany(ordersData);
    await UserModel.insertMany(usersData);
    const response = await request(app)
      .get('/orders?orderId=753&initialDate=2021-10-28&finalDate=2021-10-29')
      .set('Accept', 'application/json');

    expect(response.status).toBe(200);
    expect(response.body.data.length).toBe(1);
  });
});
