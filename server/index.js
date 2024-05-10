import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoutes);
app.get("/", (req, res) => {
  res.json("Hello from nodeJs Server");
});


const PORT = process.env.PORT || 6000;
const url = process.env.MONGO;

mongoose
  .connect(url)
  .then(() =>
    app.listen(PORT, () => console.log(`App is running at port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
