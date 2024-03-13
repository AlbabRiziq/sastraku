import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Randomstring from "randomstring";

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  nama_lengkap: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
}).pre("save", function (next) {
  const userId = Randomstring.generate(10);

  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = bcrypt.hashSync(this.password, salt);

  this.password = hashedPassword;
  this.user_id = userId;
  next();
});

const User = mongoose.models["User"] || mongoose.model("User", userSchema);
export default User;
