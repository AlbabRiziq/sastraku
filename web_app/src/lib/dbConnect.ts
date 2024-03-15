// /lib/dbConnect.js
import mongoose from "mongoose";
// import User from "@model/User";

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const dbConnect = async () => {
  const MONGODB_URI = process.env.NEXT_PUBLIC_MONGO_URI;
  return mongoose.connect(MONGODB_URI, {});
};

export default dbConnect;
