import express from "express";
import getUserData from "../controllers/usercontroller.js";
import userAuth from "../middleware/userauth.js";

const userRouter = express.Router();

userRouter.get("/data", userAuth, getUserData);

export default userRouter;
