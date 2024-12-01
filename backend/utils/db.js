import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
export async function connectToDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    return client;
  } catch (error) {
    console.log(error);
    await client.close();
  }
}
