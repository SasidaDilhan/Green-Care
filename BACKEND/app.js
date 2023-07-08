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
      address: address,
      email: email,
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
    // user.password = undefined;

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  try {
    //get all data from frontend
    const { email, password } = req.body;
    //validation
    if (!(email && password)) {
      res.status(400).send("Fields are empty");
    }
    //find user in DB
    const user = await User.findOne({ email });
    const matchingPassword = await bcrypt.compare(password, user.password);
    //if user not there and password not match
    if (user && matchingPassword) {
      //res.status(401).send("user is not registered");

      const token = jwt.sign(
        { id: user._id },
        "This is secret", //process.env.jwtsecret
        {
          expiresIn: "2h",
        }
      );
      user.token = token;
      user.password = undefined;

      //send token via cookie
      //cookie section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), //3days, 24hours, 60minutes, 60 seconds, 1000milisec
        httpOnly: true,
      };
      response.status(200).cookie("token", token, options).json({
        success: true,
        token,
      });
    }
    //match the password

    //send the token
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
