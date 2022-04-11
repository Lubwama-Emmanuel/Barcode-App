const express = require('express');
const router = express.Router();
const checkoutController = require('./../controllers/checkoutController');

router
  .route('/')
  .post(checkoutController.createCheckout)
  .get(checkoutController.getAllCheckouts);
router
  .route('/:id')
  .patch(checkoutController.updateCheckout)
  .get(checkoutController.getOneCheckout)
  .delete(checkoutController.deleteCheckout);

module.exports = router;
