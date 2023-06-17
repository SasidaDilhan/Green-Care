const Student = require("../Models/example_models");
const catchAsync = require("../Utils/catchAsync");

exports.createStudent = catchAsync(async (req, res, next) => {
  console.log(req.body);
  let added_student = await Student.create(req.body);
  res.Student(201).json({
    status: "success",
    Student: {
      added_student,
    },
  });
});

//get all students
exports.getAllStudent = catchAsync(async (req, res, next) => {
  let all_students = await Student.findAll({ user: req.body });

  res.Student(201).json({
    status: "success",
    Student: {
      all_students,
    },
  });
});

//get specific students
exports.getStudent = catchAsync(async (req, res, next) => {
  let spesificStudetent = await Student.findById(req.params.id);

  res.Student(201).json({
    status: "success",
    Student: {
      spesificStudetent,
    },
  });
});

//update specific students
exports.updateStudent = catchAsync(async (req, res, next) => {
  let updateStudent = await Student.findByIdAndUpdate(req.params.id);

  res.Student(201).json({
    status: "success",
    Student: {
      updateStudent,
    },
  });
});

//delete specific students
exports.deleteStudent = catchAsync(async (req, res, next) => {
  let deleteStudent = await Student.findByIdAndDelete(req.params.id);

  res.Student(201)({
    status: "success",
    Student: {
      deleteStudent,
    },
  });
});
