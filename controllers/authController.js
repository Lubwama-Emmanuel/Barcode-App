const Admin = require('./../models/adminModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/AppError');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

exports.adminSignUp = catchAsync(async (req, res, next) => {
  const newAdmin = await Admin.create(req.body);

  const token = signToken(newAdmin._id);

  res.status(200).json({
    status: 'Success',
    token,
    data: {
      data: newAdmin,
    },
  });
});

exports.logIn = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  // Checking if username exists
  if (!username || !password) {
    return next(new AppError('Please Provide Valid username or password', 404));
  }
  const admin = await Admin.findOne({ username }).select('+password');
  if (!admin || !(await admin.correctPassword(password, admin.password))) {
    return next(new AppError('Incorrect username or password'));
  }
  const token = signToken(admin._id);
  res.status(200).json({
    status: 'Success',
    token,
  });
});
