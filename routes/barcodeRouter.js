const express = require('express');
const router = express.Router();
const barcodesController = require('./../controllers/barcodesController');

router
  .route('/')
  .post(barcodesController.createBarcode)
  .get(barcodesController.getAllBarcodes);
router
  .route('/:id')
  .patch(barcodesController.updateBarcode)
  .get(barcodesController.getOneBarcode)
  .delete(barcodesController.deleteBarcode);

module.exports = router;
