const express = require("express");
const registerController = require("../../Controller/user_controller/user_controller");

const router = express.Router();

router
  .route("/")
  .get(registerController.getAllUsers)
  .post(registerController.createUser);

router
  .route("/:id")
  .get(registerController.oneUser)
  .patch(registerController.updateUser1)
  .delete(registerController.deleteUser1);

module.exports = router;
