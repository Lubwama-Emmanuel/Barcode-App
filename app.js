const express = require('express');
const bodyparser = require('body-parser');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');
const barcodeRouter = require('./routes/barcodeRouter');
const checkInRouter = require('./routes/checkInRouter');
const checkOutRouter = require('./routes/checkOutRouter');
const adminSettingsRouter = require('./routes/adminSettingsRouter');

// START EXPRESS APP
const app = express();

app.use(bodyparser.json());

app.use('/barcode/users', userRouter);
app.use('/barcode/admin', adminRouter);
app.use('/barcode/barcodes', barcodeRouter);
app.use('/barcode/checkIn', checkInRouter);
app.use('/barcode/checkOut', checkOutRouter);
app.use('/barcode/adminSettings', adminSettingsRouter);

module.exports = app;
