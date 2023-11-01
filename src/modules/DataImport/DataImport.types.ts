export type ParseDataServicePayload = string;

export type ParsedData = {
  userId: number;
  userName: string;
  orderId: number;
  productId: number;
  value: string;
  date: Date;
};

export type UserToCreate = {
  user_id: number;
  name: string;
};

export type OrderProducts = {
  product_id: number;
  value: string;
};

export type OrderToCreate = {
  order_id: number;
  user_id: number;
  total: string;
  date: Date;
  products: OrderProducts[];
};

export type KeyMap<T> = {
  [key: string]: T;
};
