const Admin = require('./../models/adminModel');
const catchAsync = require('./../utils/catchAsync');


exports.getAllAdmins = catchAsync(async (req, res, next) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: 'Success',
    results: admins.length,
    data: {
      data: admins,
    },
  });
});

exports.getAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findById(req.params.id);
  res.status(200).json({
    status: 'Success',
    data: {
      data: admin,
    },
  });
});

exports.updateAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: 'Success',
    data: {
      data: admin,
    },
  });
});

exports.deleteAdmin = catchAsync(async (req, res, next) => {
  const admin = await Admin.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: 'Success',
    data: {
      data: null,
    },
  });
});
