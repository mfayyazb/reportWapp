import mongoose from "mongoose";

export const ReportSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["perfect", "good", "notbad", "weak", "veryweak"],
            message: "وضعیت وارد شده صحیح نمی باشد",
        },
    },
    description: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    chatRoomId: {
        type: String,
        required: true,
    },

});

export const Report = mongoose.model("Report", ReportSchema);

