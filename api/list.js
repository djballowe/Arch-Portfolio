import connectToDatabase from "../lib/connectToDatabase";

export default async function handler(request, response) {
  try {
    const { mongoClient } = await connectToDatabase();
    const db = mongoClient.db("port");
    const collection = db.collection("images");
    const results = await collection;

    response.status(200).json(results);
  } catch (e) {
    console.error(e);
  }
}
