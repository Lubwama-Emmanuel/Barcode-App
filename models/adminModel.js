const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const uuid = require('uuid').v4;

const adminSchema = new mongoose.Schema({
  uuid: {
    type: String,
    default: uuid
  },
  full_name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: [validator.isEmail, 'Please provide valid Email address'],
  },
  barcode_id: {
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
    type: String,
  },
  status: {
    type: Boolean,
  },
});

adminSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
adminSchema.methods.correctPassword = async function (
  candidatePassword,
  adminPassword
) {
  return await bcrypt.compare(candidatePassword, adminPassword);
};
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
