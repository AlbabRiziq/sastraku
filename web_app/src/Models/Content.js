import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  content_id: {
    type: String,
    required: true,
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
}).pre("save", function (next) {
  const contentId = Randomstring.generate(10);

  this.content_id = contentId;
  next();
});

const Content =
  mongoose.models["Content"] || mongoose.model("Content", contentSchema);

export default Content;
