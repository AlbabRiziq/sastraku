import mongoose from "mongoose";
import Randomstring from "randomstring";

const subComment = new mongoose.Schema({
    sub_id: {
        type: String,
        required: true,
    },
    comment_id: {
        type: String,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
}).pre("save", function (next) {
    const subID = Randomstring.generate(10);
    this.sub_id = subID;
    next();
});

const Comment =
    mongoose.models["SubComment"] || mongoose.model("SubComment", subComment);

export default Comment;
