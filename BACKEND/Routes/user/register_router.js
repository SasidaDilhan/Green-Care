const express = require("express");
const RegisterController = require("../../Controller/user_controller");

const router = express.Router();

router
  .route("/")
  .get(RegisterController.getAllUsers)
  .post(RegisterController.createUser);

router
  .route("/:id")
  .get(RegisterController.oneUser)
  .patch(RegisterController.updateUser1)
  .delete(RegisterController.deleteUser1);

module.exports = router;
