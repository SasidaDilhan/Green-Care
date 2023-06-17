const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const app = express();

const exampleRouter = require("./Routes/example_route");

const AppError = require("./Utils/AppError");
const HttpError = require("./Utils/http-error");

app.get("/", (req, res) => {
  res.send("Server Running");
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//example routes

const base = "/api/v1";
app.use(express.json({ limit: "10kb" }));

app.use(`${base}/example`, exampleRouter);

module.exports = app;
