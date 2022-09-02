import clientPromise from "../lib/mongodb";

export default async function handler(request, response) {
  try {
    const mongoClient = await clientPromise;
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
  }
}
