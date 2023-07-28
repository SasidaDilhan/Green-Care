const Register = require("../Models/user/UserRegister_model");
const catchAsync = require("../Utils/catchAsync");

// exports.createUser = catchAsync(async (res, req, next) => {
//   console.log("methana inne hutto");
//   console.log(req.body);
//   let added_user = await Register.create(req.body);
//   res.status(201).json({
//     status: "success",
//     user: {
//       added_user,
//     },
//   });
// });
exports.createUser = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let added_student = await Register.create(req.body);
  res.status(201).json({
    status: "success",
    student: {
      added_student,
    },
  });
});
//get all users
// exports.getAllUsers = catchAsync(async (res, req, next) => {
//   let all_users = await Register.find({ user: req.body });
//   res.status(201).json({
//     status: "success",
//     user: {
//       all_users,
//     },
//   });
// });
exports.getAllUsers = catchAsync(async (req, res, next) => {
  let all_students = await Register.find({ user: req.body });

  res.status(201).json({
    status: "success",
    student: {
      all_students,
    },
  });
});

//get spesific Useer
exports.oneUser = catchAsync(async (res, req, next) => {
  let oneUser = await Register.findById(req.params.id);

  res.status(201).json({
    status: "success",
    user: {
      oneUser,
    },
  });
});

//update user
exports.updateUser1 = catchAsync(async (res, req, next) => {
  let updateUser = await Register.findByIdAndUpdate(req.params.id);

  res.status(201).json({
    status: "success",
    user: {
      updateUser,
    },
  });
});

exports.deleteUser1 = catchAsync(async (res, req, next) => {
  let deleteUser = await Register.findByIdAndDelete(req.params.id);
  res.status(201).json({
    status: "success",
    user: {
      deleteUser,
    },
  });
});
