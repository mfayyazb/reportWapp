import dotenv from "dotenv";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    console.log("NODE_ENV:", "development");
    const result = dotenv.config({
        path: path.resolve(__dirname, '.', `.env`)
    });
    if (result.error) {
        throw result.error
    }

    console.log(result.parsed)
} else {
    console.log("NODE_ENV:", "production ",path.resolve(__dirname, '.', `.env.${env}`.trim()));
    dotenv.config({
        path: path.resolve(__dirname, '.', `.env.${env}`.trim()) // Load the appropriate .env file
    });
}

console.log('appEnvConfig.DB_URL:', process.env.DB_URL);

const envConfig = process.env;
export default envConfig
