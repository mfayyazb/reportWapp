import mongoose from "mongoose";
// import dotenv from "dotenv";
import envConfig from './envconfig.mjs';

//const add = require('./envconfig.js').default;


console.log('appEnvConfig.DB_URL:',envConfig.DB_URL);
// dotenv.config();
const dbUrl = envConfig.DB_URL;

console.log
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}
