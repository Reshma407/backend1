import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

export const config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,

};