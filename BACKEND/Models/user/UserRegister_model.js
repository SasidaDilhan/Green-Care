const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phonenumber: {
    type: Number,
  },
  nicnumber: {
    type: String,
  },
  address: {
    type: String,
  },
  password: {
    type: String,
  },
});

const user = mongoose.model("User", registerSchema);
module.exports = user;
