import dotenv from "dotenv";

dotenv.config();

export const config = {
  PORT: process.env.PORT || 5000,   // fallback for Render
  MONGO_URI: process.env.MONGO_URI,
  SMTP_EMAIL: process.env.SMTP_EMAIL,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
};
