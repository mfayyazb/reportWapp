import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbUrl = process.env.DB_URL;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}
