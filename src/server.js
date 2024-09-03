// setup express and mongoDB
import dotenv from "dotenv";
import "./db.js";
import "./routes/reportRoutes.js";
import app from "./app.js";
// import path from 'path';
// import { fileURLToPath } from 'url';
import envConfig from './envconfig.mjs';
// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory
// dotenv.config();
// const env = process.env.NODE_ENV || 'development';

// Fallback to default .env file for development
// if (env === 'development') {
//   const result = dotenv.config({
//     path: path.resolve(__dirname, '.', `.env`) 
//   });
//   if (result.error) {
//     throw result.error
//   }
  
//   console.log(result.parsed)
// }
// else {
//   dotenv.config({    
//     path: path.resolve(__dirname, '.', `.env.${env}`.trim()) // Load the appropriate .env file
//   });
// }

const appPort = envConfig.PORT;

console.log('process.env.PORT:',envConfig.PORT)

// routes
app.get("/", async (req, res) => {
  res.send("بسم الله الرحمن الرحیم");
});

app.listen(appPort, () => {
  console.log(`Example app listening on port ${appPort}`);
});
