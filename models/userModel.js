const uuid = require('uuid');
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    validate: [validator.isEmail, 'Please provide valid email address'],
    lowercase: true,
  },
  company: {
    type: String,
  },
  barcode_id: {
    type: Number,
  },
  welcome_email_message: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
  },
  updated_by_admin_id: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
