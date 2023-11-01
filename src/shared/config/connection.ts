import mongoose from 'mongoose';

// cria conexão com o MongoDB
export default mongoose
  .connect(
    'mongodb+srv://gui:123@cluster0.kulmwtc.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => {
    console.log('conectou no banco');
  })
  .catch((err) => console.log(err));
