import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  user_id: {
    type: Number,
    index: {
      unique: true,
    },
  },
  name: String,
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

const UserModel = mongoose.model('User', UserSchema);

export { UserModel };
