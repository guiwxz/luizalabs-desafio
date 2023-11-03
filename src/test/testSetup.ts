import { connectDB } from './utils/connectDB';
import { dropAllCollections } from './utils/dropAllCollections';
import { removeAllCollections } from './utils/removeAllCollections';
import mongoose from 'mongoose';

export const setupDB = () => {
  beforeAll(async () => {
    await connectDB();
  });

  afterEach(async () => {
    await removeAllCollections();
  });

  afterAll(async () => {
    await dropAllCollections();
    await mongoose.connection.close();
  });
};
