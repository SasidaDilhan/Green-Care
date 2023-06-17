const mongoose = require("mongoose");

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  grade: {
    type: String,
  },
});

const student = mongoose.model("Student", exampleSchema);
module.exports = student;
