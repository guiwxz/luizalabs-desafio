export type ListOrdersServicePayload = {
  order_id?: number;
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
