import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose, { mongo } from "mongoose";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from express endpoint" });
});

app.listen(8000, () => {
  console.log("server has started at localhost:8000");
});
