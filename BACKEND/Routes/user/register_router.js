const express = require("express");
const RegisterController = require("../../Controller/user_controller");

const router = express.Router();

router
  .route("/")
  .get(RegisterController.getAllUsers)
  .post(RegisterController.createUser);

// router
//   .route("/:id")
//   .get(studentController.getStudent)
//   .patch(studentController.updateStudent)
//   .delete(studentController.deleteStudent);

module.exports = router;
