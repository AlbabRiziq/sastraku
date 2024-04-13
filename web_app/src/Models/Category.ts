import mongoose from "mongoose";
import Randomstring from "randomstring";

const categorySchema = new mongoose.Schema({
  category_id: {
    type: String,
    required: true,
    unique: true,
  },
  category_name: {
    type: String,
    required: true,
  },
}).pre("save", function (next) {
  const categoryId = Randomstring.generate(5);

  this.category_id = categoryId;
  next();
});

const Category =
  mongoose.models["Category"] || mongoose.model("Category", categorySchema);
export default Category;
