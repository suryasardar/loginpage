require("dotenv").config();
const express = require("express");
// import cors from "Cors";
const cors = require("cors");
const app = express();
app.use(cors());

const userrouter = require("./apis/userRouter");

// Use the built-in express.json() middleware for parsing JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  if (req.body === undefined || req.body === null) {
    return res.status(400).json({
      success: 0,
      message: "Request body is empty or not valid JSON.",
    });
  }
  next();
});
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});

app.use("/api/users", userrouter);

app.listen(process.env.APP_PORT, () => {
  console.log("server is running on port:", process.env.APP_PORT);
});
