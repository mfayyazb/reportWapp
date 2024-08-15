import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: {
      values: ["ready", "doing", "stopped", "done", "check"],
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
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
