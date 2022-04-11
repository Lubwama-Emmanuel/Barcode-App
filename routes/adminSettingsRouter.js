const express = require('express');
const router = express.Router();
const adminSettingsController = require('./../controllers/adminSettingsController');

router
  .route('/')
  .post(adminSettingsController.createSetting)
  .get(adminSettingsController.getAllSettings);
router
  .route('/:id')
  .patch(adminSettingsController.updateSetting)
  .get(adminSettingsController.getOneSetting)
  .delete(adminSettingsController.deleteSetting);

module.exports = router;
