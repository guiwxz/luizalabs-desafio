import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    product_id: Number,
    value: String,
  },
  {
    _id: false,
  },
);

const OrderSchema = new mongoose.Schema({
  order_id: {
    type: Number,
    index: {
      unique: true,
    },
  },
  user_id: {
    type: mongoose.Schema.Types.Number,
  },
  total: String,
  date: {
    type: Date,
  },
  products: [ProductSchema],
});

const OrderModel = mongoose.model('Order', OrderSchema);

export { OrderModel };
