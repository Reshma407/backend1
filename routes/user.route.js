import { Router } from "express";
import { deleteUser, updateUser } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.js";
import { authorizeRoles } from "../middlewares/authorize.js";

const router = Router();
router.put("/:id", auth, authorizeRoles("user","admin"), updateUser);
router.delete("/:id", deleteUser);

export default router;