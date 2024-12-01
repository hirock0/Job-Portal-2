import { connectToDB } from "../utils/db.js";
export const register = async (req, res) => {
  const client = await connectToDB();
  const data = await client.db("Data").collection("users").insertOne(req.body);
  console.log(data);
  res.status(200).json({
    message: "Data is found",
    success: true,
  });
};

