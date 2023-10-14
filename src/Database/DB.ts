import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://admin:admin123@cluster0.1me6qfz.mongodb.net/?retryWrites=true&w=majority'

export const client = new MongoClient(url);

export async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the MongoDB server');
  } catch (err) {
    console.error('Failed to connect to the MongoDB server:', err);
  }
}
