const Student = require("../Models/example_models");
const catchAsync = require("../Utils/catchAsync");

exports.createStudent = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let added_student = await Student.create(req.body);
  res.status(201).json({
    status: "success",
    student: {
      added_student,
    },
  });
});

//get all students
exports.getAllStudent = catchAsync(async (req, res, next) => {
  let all_students = await Student.find({ user: req.body });

  res.status(201).json({
    status: "success",
    student: {
      all_students,
    },
  });
});

//get specific students
exports.getStudent = catchAsync(async (req, res, next) => {
  let spesificStudetent = await Student.findById(req.params.id);

  res.status(201).json({
    status: "success",
    student: {
      spesificStudetent,
    },
  });
});

//update specific students
exports.updateStudent = catchAsync(async (req, res, next) => {
  let updateStudent = await Student.findByIdAndUpdate(req.params.id);

  res.status(201).json({
    status: "success",
    student: {
      updateStudent,
    },
  });
});

//delete specific students
exports.deleteStudent = catchAsync(async (req, res, next) => {
  let deleteStudent = await Student.findByIdAndDelete(req.params.id);

  res.status(201)({
    status: "success",
    student: {
      deleteStudent,
    },
  });
});
