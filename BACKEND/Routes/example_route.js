const express = require("express");
const studentController = require("../Controller/example_controller");

const router = express.Router();

router
  .route("/")
  .get(studentController.getAllStudent)
  .post(studentController.createStudent);

router
  .route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = router;
