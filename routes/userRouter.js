const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController');

router
  .route('/')
  .post(userController.createUser)
  .get(userController.getAllUsers);
router
  .route('/:id')
  .patch(userController.updateUser)
  .get(userController.getOneUser)
  .delete(userController.deleteUser);

module.exports = router;
