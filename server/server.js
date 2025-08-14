import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/mongodb.js";
import authRouter from "./routes/route.js";
import userRouter from "./routes/userRoutes.js";

const app = express();
const port = process.env.port || 4000;
connectDb();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

//Api Endpoints
app.get("/", (req, res) => {
  res.send("API WORKING");
});
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running in server ${port}`);
});
