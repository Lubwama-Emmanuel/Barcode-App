const Checkin = require('./../models/checkinModel')
const catchAsync = require('./../utils/catchAsync')

exports.createCheckin = catchAsync(async (req, res, next) => {
    console.log('yooo we checking ins')
  const newCheckin = await Checkin.create(req.body);
  res.status(200).json({
    status: 'Success',
    data: {
      data: newCheckin,
    },
  });
});

exports.getAllCheckins = catchAsync(async (req, res, next) => {
  const Checkins = await Checkin.find()
  res.status(200).json({
    status: 'Success',
    results: Checkins.length,
    data: {
      data: Checkins,
    },
  });
});

exports.getOneCheckin = catchAsync(async (req, res, next) => {
  const checkin = await Checkin.findById(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: checkin,
    },
  });
});
 
exports.updateCheckin = catchAsync(async (req, res, next) => {
  const checkin = await Checkin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'Success',
    data: {
      data: checkin,
    },
  });
});

exports.deleteCheckin = catchAsync(async (req, res, next) => {
  const checkin = await Checkin.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: null
    },
  });
});
