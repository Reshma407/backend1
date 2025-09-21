import mongoose from "mongoose";

// schema:
// blueprint of the document
// defines field data types validation rules

// model
// compiles version of schema
// used to create/read/update/delete documents

// schema
// blueprint of a house
// model
// contractor that build the house

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please fill a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    borrowedBooks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    resetVerified: {
      type: Boolean,
      default: false,
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;