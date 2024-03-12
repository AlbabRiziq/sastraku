// /lib/dbConnect.js
import mongoose from "mongoose";
// import User from "@model/User";

/** 
Source : 
https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/utils/dbConnect.js 
**/

const dbConnect = async () => {
  const MONGODB_URI = "mongodb://localhost:27017/sastraku";
  return mongoose.connect(MONGODB_URI, {});
};

export default dbConnect;
