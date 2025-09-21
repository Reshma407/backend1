import { Router } from "express";
import { borrowBook } from "../controllers/borrow.controller.js";
import { auth } from "../middlewares/auth.js";

const router = Router();

router.post("/borrow/:bookId", auth, borrowBook);

export default router;