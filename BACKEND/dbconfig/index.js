const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "../config.env" });

//configure the database
const URL =
  process.env.DATABASE ||
  "mongodb+srv://buddy:buddy123@cluster0.3kn57i0.mongodb.net/";

mongoose
  .connect(URL, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connection Successfull!"));

module.exports = mongoose;
