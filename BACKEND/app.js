const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const app = express();
const User = require("./Models/user/UserRegister_model");
const jwt = require("jsonwebtoken");

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

app.post("/register", async (req, res) => {
  try {
    //get all data from body
    const { firstname, lastname, phone, nic, email, password } = req.body;
    //all data should already exists
    if (!(firstname && lastname && phone && nic && email && password)) {
      res.status(400).send("all files is compulsory");
    }
    //check if user already exists - email
    const exsistingUser = await User.findOne({ email });
    if (exsistingUser) {
      res.status(401).send("User already exists");
    }
    //encrypt the password
    const myEncryptedPassword = await bcrypt.hash(password, 10);
    //save the user in DB
    const user = await User.create({
      first_name: firstname,
      last_name: lastname,
      phone_number: phone,
      nic_number: nic,
      address,
      email,
      password: myEncryptedPassword,
    });

    //generate a token for user and send it

    jwt.sign(
      { id: user._id, email: user.email },
      "This is secret", //process.env.jwtsecret
      {
        expiresIn: "2h",
      }
    );
    user.token = token;
    user.password = undefined;

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    //get all data from frontend
    //find user in DB
    //match the password
    //send the token
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
