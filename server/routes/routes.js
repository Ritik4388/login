import express from "express";

const router = express.Router();
import signUpUser from "../controller/user.js";
router.post("/signup", signUpUser);
router.post("/login", loginUser);

export default router;
