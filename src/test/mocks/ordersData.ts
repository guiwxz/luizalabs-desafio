export const ordersData = [
  {
    _id: '6542c7c3c7d4b57e0fc2a994',
    order_id: 753,
    date: new Date('2021-10-28T00:00:00.000+00:00'),
    products: [
      { product_id: 2, value: '798.03' },
      { product_id: 5, value: '1567.00' },
      { product_id: 2, value: '601.43' },
    ],
    total: '2966.46',
    user_id: 1,
  },
  {
    _id: '6542c7c3c7d4b57e0fc2a995',
    order_id: 3,
    date: new Date('2021-10-28T00:00:00.000+00:00'),
    products: [
      { product_id: 3, value: '798.03' },
      { product_id: 5, value: '1567.00' },
      { product_id: 7, value: '601.43' },
    ],
    total: '2966.46',
    user_id: 1,
  },
  {
    _id: '6542c7c3c7d4b57e0fc2a996',
    order_id: 34,
    date: new Date('2021-09-30T00:00:00.000+00:00'),
    products: [
      { product_id: 5, value: '798.03' },
      { product_id: 99, value: '1567.00' },
      { product_id: 32, value: '601.43' },
    ],
    total: '2966.46',
    user_id: 1,
  },
  {
    _id: '6542c7c3c7d4b57e0fc2a9ab',
    order_id: 66,
    date: new Date('2021-10-30T00:00:00.000+00:00'),
    products: [
      { product_id: 4, value: '798.03' },
      { product_id: 55, value: '1567.00' },
      { product_id: 324, value: '601.43' },
    ],
    total: '2966.46',
    user_id: 3,
  },
  {
    _id: '6542c7c3c7d4b57e0fc2a9ad',
    order_id: 67,
    date: new Date('2021-10-28T00:00:00.000+00:00'),
    products: [
      { product_id: 4, value: '798.03' },
      { product_id: 535, value: '1567.00' },
      { product_id: 42, value: '601.43' },
    ],
    total: '2966.46',
    user_id: 3,
  },
];

export const usersData = [
  {
    _id: '6542c7c4c7d4b57e0fc2b4c0',
    user_id: 1,
    name: 'Sammie Baumbach',
    orders: [
      '6542c7c3c7d4b57e0fc2a994',
      '6542c7c3c7d4b57e0fc2a995',
      '6542c7c3c7d4b57e0fc2a996',
    ],
  },
  {
    _id: '6542c7c4c7d4b57e0fc2b4c5',
    user_id: 3,
    name: 'Carolann Walker',
    orders: ['6542c7c3c7d4b57e0fc2a9ab', '6542c7c3c7d4b57e0fc2a9ad'],
  },
];
