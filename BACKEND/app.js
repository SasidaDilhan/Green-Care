const express = require("express");
const cors = require("cors");
const multer = require("multer");
const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const app = express();

const AppError = require("./Utils/AppError");
const HttpError = require("./Utils/http-error");

module.exports = app;
