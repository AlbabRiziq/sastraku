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
  },
  nama_lengkap: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  ttl: {
    type: String,
    required: true,
  },
}).pre("save", function (next) {
  const userId = Randomstring.generate(10);

  const salt = bcrypt.genSaltSync(5);
  const hashedPassword = bcrypt.hashSync(this.password, salt);

  this.password = hashedPassword;
  this.user_id = userId;
  next();
});

module.exports = mongoose.model.User || mongoose.model("User", userSchema);
