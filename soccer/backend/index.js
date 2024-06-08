import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/soccerRoutes";
require("dotenv").config();

const uri = process.env.DB_HOST;

const app = express();
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect(uri);

//bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
app.use(cors());

//route
// routes(app);

app.get("/", (req, res) =>
  res.send(`Our application is running on port ${PORT}`)
);

app.listen(PORT, () =>
  console.log(`Your soccer server is running on port ${PORT}`)
);
