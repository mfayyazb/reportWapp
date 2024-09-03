import Report from "../models/reportModel.js";
import { errorHandler } from "./auxiliary.service.js";
import jwt from "jsonwebtoken";

export const createReport = async (req, res) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send("authorization header is missing");
    }
    const userId = jwt.decode(token).userId;
    const newReport = new Report({
      date: new Date(),
      userId,
      ...req.body,
    });
    await newReport.save();
    res.send({
      type: "SUCCESS",
      body: {
        reportId: newReport._id,
      },
    });
  } catch (error) {
    res.send({
      type: "ERROR",
      body: { txt: errorHandler(error) },
    });
  }
};

export const getReport = async (req, res) => {
  try {
    const reportId = req.params.id;
    const foundedReport = await Report.findById(reportId);
    if(foundedReport) res.send(foundedReport);
    else res.status(404).send({
      type: "ERROR",
      body: { txt: "گزارش خواسته شده یافت نشد" },
    })
  } catch (error) {
    res.send({
      type: "ERROR",
      body: { txt: errorHandler(error) },
    });
  }
};


export const getAllReport = async (req, res) => {
  try {
    const tasks = await Report.find({});
    
    if(!tasks){
        return res.status(404).json({ success: false, msg: 'No tasks found' })
    }
    res.status(200).json({ success: true, tasks })
} catch (error) {
    res.status(500).json({ success: false, msg: 'Server Error' })
}


}
