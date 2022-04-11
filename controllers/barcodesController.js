const Barcode = require('./../models/barcodesModel')
const catchAsync = require('./../utils/catchAsync')

exports.createBarcode = catchAsync(async (req, res, next) => {
  const newBarcode = await Barcode.create(req.body);
  res.status(200).json({
    status: 'Success',
    data: {
      data: newBarcode,
    },
  });
});

exports.getAllBarcodes = catchAsync(async (req, res, next) => {
  const barcodes = await Barcode.find()
  res.status(200).json({
    status: 'Success',
    results: barcodes.length,
    data: {
      data: barcodes,
    },
  });
});

exports.getOneBarcode = catchAsync(async (req, res, next) => {
  const barcode = await Barcode.findById(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: barcode,
    },
  });
});
 
exports.updateBarcode = catchAsync(async (req, res, next) => {
  const barcode = await Barcode.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  })
  res.status(200).json({
    status: 'Success',
    data: {
      data: barcode,
    },
  });
});

exports.deleteBarcode = catchAsync(async (req, res, next) => {
  const barcode = await Barcode.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status: 'Success',
    data: {
      data: null
    },
  });
});
