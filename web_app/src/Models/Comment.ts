import mongoose from "mongoose";
import Randomstring from "randomstring";

const commentSchema = new mongoose.Schema({
    comment_id: {
        type: String,
        unique: true,
    },
    content_id: {
        type: String,
        required: true,
    },
    nama_lengkap: {
        type: String,
        required: true,
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
    const commentID = Randomstring.generate(10);
    this.comment_id = commentID;
    next();
});

const Comment =
    mongoose.models["Comment"] || mongoose.model("Comment", commentSchema);

export default Comment;
