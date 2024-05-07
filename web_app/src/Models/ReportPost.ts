import mongoose from "mongoose";
import Randomstring from "randomstring";

const ReportPost = new mongoose.Schema({
    report_id: {
        type: String,
        unique: true,
    },
    post_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
}).pre("save", function (next) {
    const idReport = Randomstring.generate(10);
    this.report_id = idReport;

    next();
});

const PostReport = mongoose.models["ReportPost"] || mongoose.model("ReportPost", ReportPost);
export default PostReport;
