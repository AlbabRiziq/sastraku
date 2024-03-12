import mongoose from "mongoose";
import dbConnect from "../../lib/dbConnect";
import User from "@/Models/User";

export async function POST(req: Request, res: Response) {
  await dbConnect();

  

  return Response.json({ message: "asd" });
}
