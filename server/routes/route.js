import express from "express";
import {
  isAutheticated,
  register,
  resetPassword,
  sendResetOtp,
  sendVerifyOtp,
  verifyEmail,
} from "../controllers/authcontoller.js";
import { login } from "../controllers/authcontoller.js";
import { logout } from "../controllers/authcontoller.js";
import userAuth from "../middleware/userauth.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);
authRouter.post("/is-auth", userAuth, isAutheticated);
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-Password", resetPassword);
export default authRouter;
