const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const User = require("./Models/user/UserRegister_model");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const exampleRouter = require("./Routes/example_route");
const registerRouter = require("./Routes/user/register_router");

const AppError = require("./Utils/AppError");
const HttpError = require("./Utils/http-error");

const app = express();
app.use(cookieParser());

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
app.use(`${base}/register`, registerRouter);

module.exports = app;
