import { MongoClient } from "mongodb";

const uri = process.env.REACT_APP_MONGODB_URI;
const options = {};

if (!process.env.REACT_APP_MONGODB_URI) {
  throw new Error("Please add your Mongo URI");
}

export default async function handler(request, response) {
  try {
    const mongoClient = await new MongoClient(uri, options).connect();
    console.log("connected");
    const db = mongoClient.db("port");
    const collection = db.collection("images");
    const results = await collection
      .find({})
      .project({
        file: String,
      })
      .toArray();

    response.status(200).json(results);
  } catch (e) {
    console.error(e);
    response.status(500);
  }
}
