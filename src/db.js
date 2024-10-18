import mongoose from "mongoose";
// import dotenv from "dotenv";
import envConfig from './envconfig.mjs';

const dbUrl = envConfig.DB_URL;
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

//********************************************************/

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/reports');
// }
