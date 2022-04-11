const express = require('express');
const router = express.Router();
const adminController = require('./../controllers/adminController');
const authController = require('./../controllers/authController');

router.route('/signUp').post(authController.adminSignUp)
router.route('/logIn').post(authController.logIn)
router
  .route('/')
  .get(adminController.getAllAdmins);
router
  .route('/:id')
  .patch(adminController.updateAdmin)
  .get(adminController.getAdmin)
  .delete(adminController.deleteAdmin);

module.exports = router;
