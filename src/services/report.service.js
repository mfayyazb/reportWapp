import {Report, ReportSchema} from "../models/reportModel.js";
import {errorHandler} from "./auxiliary.service.js";
import jwt from "jsonwebtoken";

export const createReport = async (req, res) => {
    try {
        const token = req.headers["authorization"];
        if (!token) {
            return res.status(401).send("authorization header is missing");
        }
        const userId = jwt.decode(token).userId;

        console.log("chatRoomId:", req.body.chatRoomId);
        let report = await Report.findOne({chatRoomId: req.body.chatRoomId}).exec();

        if (!report) {

            console.log("save new report :", report);

            const newReport = new Report({
                date: new Date(),
                userId,
                ...req.body,
            });

            await newReport.save();
            report = newReport;

        } else {

            report.description = req.body.description;
            report.status = req.body.status;
            console.log("update report :", report);

            await Report.updateOne({chatRoomId: req.body.chatRoomId}, report);

        }

        res.send({
            type: "SUCCESS",
            body: {
                reportId: report._id,
            },
        });

    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt: errorHandler(error)},
        });
    }
};

export const getReport = async (req, res) => {
    try {
        const reportId = req.params.id;
        const foundedReport = await Report.findById(reportId);
        if (foundedReport) res.send(foundedReport);
        else res.status(404).send({
            type: "ERROR",
            body: {txt: "گزارش خواسته شده یافت نشد"},
        })
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt: errorHandler(error)},
        });
    }
};


export const getReportByChatRoomId = async (req, res) => {
    try {
        const chatRoomId = req.params.chatRoomId;
        const foundedReport = await Report.findOne({chatRoomId: chatRoomId});
        if (foundedReport) res.send(foundedReport);
        else res.status(404).send({
            type: "ERROR",
            body: {txt: "گزارش خواسته شده یافت نشد"},
        })
    } catch (error) {
        res.send({
            type: "ERROR",
            body: {txt: errorHandler(error)},
        });
    }
};


export const getAllReport = async (req, res) => {
    try {
        const reports = await Report.find({});

        if (!reports) {
            return res.status(404).json({success: false, msg: 'No tasks found'})
        }
        res.status(200).json({success: true, reports: reports})

    } catch (error) {
        res.status(500).json({success: false, msg: 'Server Error'})
    }

};
