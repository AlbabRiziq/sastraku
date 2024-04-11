import mongoose from "mongoose";
import Randomstring from "randomstring";

const subCategorySchema = new mongoose.Schema({
  sub_category_id: {
    type: String,
    required: true,
    unique: true,
  },
  sub_category_name: {
    type: String,
    required: true,
  },
}).pre("save", function (next) {
  const subCategoryId = Randomstring.generate(10);

  this.sub_category_id = subCategoryId;
  this.sub_category_name = this.sub_category_name.toUpperCase();
  next();
});

const SubCategory =
  mongoose.models["SubCategory"] ||
  mongoose.model("SubCategory", subCategorySchema);
export default SubCategory;
