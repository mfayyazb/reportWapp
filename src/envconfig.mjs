import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
// dotenv.config();
const env = process.env.NODE_ENV || 'development';

// Fallback to default .env file for development
if (env === 'development') {
  const result = dotenv.config({
    path: path.resolve(__dirname, '.', `.env`) 
  });
  if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed)
}
else {
  dotenv.config({    
    path: path.resolve(__dirname, '.', `.env.${env}`.trim()) // Load the appropriate .env file
  });
}

const envConfig = process.env;
export default envConfig
// module.exports = {envConfig:envConfig}
