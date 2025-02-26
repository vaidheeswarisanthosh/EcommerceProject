import express from "express";
import { registerUser, loginUser, logoutUser} from "../controllers/authController.js";

const router = express.Router();

// Register Route
router.post("/register", registerUser);

// Login Route
router.post("/login", loginUser);

router.post("/logout",logoutUser)

export default router;
