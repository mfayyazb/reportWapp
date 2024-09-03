// setup express and mongoDB
import dotenv from "dotenv";
import "./db.js";
import "./routes/reportRoutes.js";
import app from "./app.js";

dotenv.config();
const appPort = process.env.PORT;

// routes
app.get("/", async (req, res) => {
  res.send("بسم الله الرحمن الرحیم");
});

app.listen(appPort, () => {
  console.log(`Example app listening on port ${appPort}`);
});

//********************************************************/
// app.listen(appPort, () => {
//   app.listen(8000)
//   console.log('Server is running on port 8000');
// });

