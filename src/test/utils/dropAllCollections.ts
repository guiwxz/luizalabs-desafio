import mongoose from 'mongoose';

export async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      const typedError = error as Error;
      if (typedError.message === 'ns not found') return;
      if (
        typedError.message.includes(
          'a background operation is currently running',
        )
      )
        return;
      console.log(typedError.message);
    }
  }
}
