require("dotenv").config();

const express = require("express");
const cors = require("cors");
const databaseConnection = require("./config/databaseConnection.js");
const cookieParser = require("cookie-parser");

const app = express();

// middlewares
app.use(
  cors({
    origin: process.env.REACT_APP_FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api's
app.use("/api", require("./routes/blogRoutes.js"));
app.use("/api", require("./routes/userRoutes.js"));
app.get("/test", (req, res) => {
  return res.status(200).send("<h1>Working..</h1>");
});
(async () => {
  databaseConnection();

  // app.listen(process.env.BACKEND_PORT, () => {
  //   console.log("Server is listening at port 5000");
  // });
})();

module.exports = app;
