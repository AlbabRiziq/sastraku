import mongoose from "mongoose";
import Randomstring from "randomstring";

const contentSchema = new mongoose.Schema({
  content_id: {
    type: String,
    unique: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  content_title: {
    type: String,
    required: true,
  },
  content_description: {
    type: String,
    default: "",
  },
  sub_category_id: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  like_count: {
    type: Number,
    default: 0,
  },
  cover_url: {
    type: String,
    default: null,
  }
}).pre("save", function (next) {
  const contentId = Randomstring.generate(10);
  this.content_id = contentId;

  const isi = this.value;

  const regex = /<font\s+face=\\"PT\s+Serif,\s+Georgia,\s+serif\\">|<\/font>/g;

  const newIsi = isi.replace(regex, "");

  this.value = newIsi;

  next();
});

const Content =
  mongoose.models["Content"] || mongoose.model("Content", contentSchema);

export default Content;
