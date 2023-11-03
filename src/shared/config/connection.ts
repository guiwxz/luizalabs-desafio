import mongoose from 'mongoose';
import { generateConnectionUrl } from '../utils/generateConnectionUrl';

// cria conexão com o MongoDB
export default mongoose
  .connect(generateConnectionUrl(), {
    dbName: process.env.MONGODB_DB,
  })
  .then(() => {
    console.log('conectou no banco');
  })
  .catch((err) => console.log(err));
