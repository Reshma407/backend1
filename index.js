import express from "express";
import bookRoutes from "./routes/book.route.js";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import uploadRoutes from "./routes/upload.route.js";
import borroRoutes from "./routes/borrow.route.js";
import connectDB from "./config/db.js"; // default import
import { config } from "./config/config.js";
import morgan from "morgan";
import cors from "cors";

const app = express();

// Connect to MongoDB
connectDB();
app.use(cors({
  origin:"",
  credentials: true,
})
);

app.use(morgan("dev"));

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/books", bookRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);
app.use("/upload", uploadRoutes);
app.use("/", borroRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
