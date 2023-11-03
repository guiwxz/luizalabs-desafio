import mongoose from 'mongoose';

export const connectDB = async () => {
  const url = 'mongodb+srv://gui:123@cluster0.kulmwtc.mongodb.net/';
  await mongoose.connect(url, { retryWrites: true });
};
