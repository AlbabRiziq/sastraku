import mongoose from "mongoose";
import dbConnect from "../../lib/dbConnect";
import User from "../../../Models/User";
import validator from "validator";

export async function POST(req: Request, res: Response) {

  await dbConnect()
  
  const {searchParams} = new URL(req.url)
  const namaLengkap = searchParams.get("nama_lengkap")
  const username = searchParams.get("username")
  const passwd = searchParams.get("password")

  const validatePasswd = validator.isLength(passwd, { min: 5 })
  
  const userN = User.findOne({
    username: username
  }).exec()

  console.log(await userN);
  
  
  

  return Response.json({ message: "asd" });
}
