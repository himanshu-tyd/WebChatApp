import express from "express";
import { singUp, login, logout } from "../controllers/authControllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", singUp);
router.post("/login", login);
router.post("/logout", protectRoute, logout);

export default router;
