import app from "../app.js";
import { createReport, getReport,getReportByChatRoomId,getAllReport  } from "../services/report.service.js";


app.get("/report", getAllReport);
app.post("/report", createReport);
app.get("/report/:id", getReport);
app.get("/reportByChatRoomId/:chatRoomId", getReportByChatRoomId);

