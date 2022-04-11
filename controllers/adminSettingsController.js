const AdminSettings = require('../models/adminSettingsModel');
const catchAsync = require('../utils/catchAsync');

exports.createSetting = catchAsync(async (req, res, next) => {
    const newSetting = await AdminSettings.create(req.body);
    res.status(200).json({
      status: 'Success',
      data: {
        data: newSetting,
      },
    });
  });
  
exports.getAllSettings = catchAsync(async (req, res, next) => {
    const settings = await AdminSettings.find()
    res.status(200).json({
      status: 'Success',
      results: settings.length,
      data: {
        data: settings,
      },
    });
  });
  
  exports.getOneSetting = catchAsync(async (req, res, next) => {
    const setting = await AdminSettings.findById(req.params.id)
    res.status(200).json({
      status: 'Success',
      data: {
        data: setting,
      },
    });
  });
   
  exports.updateSetting = catchAsync(async (req, res, next) => {
    const setting = await AdminSettings.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'Success',
      data: {
        data: setting,
      },
    });
  });
  
  exports.deleteSetting = catchAsync(async (req, res, next) => {
    const setting = await AdminSettings.findByIdAndDelete(req.params.id)
    res.status(200).json({
      status: 'Success',
      data: {
        data: null
      },
    });
  });
  