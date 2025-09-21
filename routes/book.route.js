import express from "express";
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/book.controller.js";
import { auth } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/authorize.js";


const router = express.Router();

// Public
router.get("/", getAllBooks);
router.get("/:bookId", getBookById);

// Admin Only
router.post("/", createBook);
router.put("/:bookId", auth, authorizeRoles("admin"), updateBook);
router.delete("/:bookId", auth, authorizeRoles("admin"), deleteBook);

export default router;