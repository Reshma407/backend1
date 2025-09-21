import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://reshmabasnet088_db_user:basnet%402063@cluster0.13lhbyi.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
