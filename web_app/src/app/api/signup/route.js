import mongoose from "mongoose";
import userSchema from "@model/User";

mongoose
  .connect("mongodb://localhost:27017/sastraku")
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

export async function POST(request) {
  const req = await request.formData();

  console.log(req.get("name"));

  return Response.json({ message: "ini post" });
}
