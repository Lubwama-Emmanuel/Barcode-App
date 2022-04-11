const express = require('express');
const router = express.Router();
const checkinController = require('./../controllers/checkinController');

router
  .route('/')
  .post(checkinController.createCheckin)
  .get(checkinController.getAllCheckins);
router 
  .route('/:id')
  .patch(checkinController.updateCheckin)
  .get(checkinController.getOneCheckin)
  .delete(checkinController.deleteCheckin);

module.exports = router;
