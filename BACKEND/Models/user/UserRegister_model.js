const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: Number,
  },
  nic_number: {
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
