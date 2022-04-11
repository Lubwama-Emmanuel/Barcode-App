const mongoose = require('mongoose');

const barcodeSchema = new mongoose.Schema({
  user_id: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
  },
});

const Barcode = mongoose.model('Barcode', barcodeSchema);
module.exports = Barcode;
