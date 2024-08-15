import app from "../app.js";
import { createReport, getReport } from "../services/report.service.js";

app.post("/report", createReport);
app.get("/report/:id", getReport);
