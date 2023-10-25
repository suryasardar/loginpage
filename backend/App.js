require("dotenv").config();
const express = require("express");
const app = express();

const userrouter = require("./apis/userRouter");
app.use(express.json());
app.use("/api/users", userrouter);
// app.get("/api", (req, res) => {

//   res.json({
//     success: 1,
//     messege: "this is rest api working",
//   });
// });

app.listen(process.env.APP_PORT, () => {
  console.log("server is running on port:", process.env.APP_PORT);
});
