import mongoose from 'mongoose';

// cria conexão com o MongoDB
export default mongoose
  .connect(process.env.MONGODB_CONNECTION_URL as string)
  .then(() => {
    console.log('conectou no banco');
  })
  .catch((err) => console.log(err));
