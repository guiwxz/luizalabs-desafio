import { generateConnectionUrl } from '@/shared/utils/generateConnectionUrl';
import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose.connect(generateConnectionUrl(), {
    dbName: process.env.MONGODB_DB,
  });
};
