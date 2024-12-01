import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/user.route.js";
dotenv.config();
const app = express();
const corsOption = {
  origin: process.env.DOMAIN_URL,
  credentials: true,
};
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT;
app.use("/api/v1/user", userRouter);

app.listen(PORT || 5000, () => {
  console.log(`Server is running on ${PORT}`);
});
