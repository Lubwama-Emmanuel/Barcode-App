const Checkout = require('../models/checkoutModel')
const catchAsync = require('../utils/catchAsync')

exports.createCheckout = catchAsync(async (req, res, next) => {
  const newCheckout = await Checkout.create(req.body);
  res.status(200).json({
    status: 'Success',
    data: {
      data: newCheckout,
    },
  });
});

exports.getAllCheckouts = catchAsync(async (req, res, next) => {
  const checkouts = await Checkout.find()
  res.status(200).json({
    status: 'Success',
    results: checkouts.length,
    data: {
      data: checkouts,
    },
  });
});

exports.getOneCheckout = catchAsync(async (req, res, next) => {
  const checkout = await Checkout.findById(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: checkout,
    },
  });
});
 
exports.updateCheckout = catchAsync(async (req, res, next) => {
  const checkout = await Checkout.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'Success',
    data: {
      data: checkout,
    },
  });
});

exports.deleteCheckout = catchAsync(async (req, res, next) => {
  const checkout = await Checkout.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: null
    },
  });
});
