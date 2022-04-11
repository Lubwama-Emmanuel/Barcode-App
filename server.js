const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then((con) => console.log('DATABASE CONNECTED SUCCESSFULLY!'))
  .catch((err) => console.log('SORRY: DATABASE NOT CONNECTED'));


app.listen(port, () => {
  console.log(`LISTENING TO PORT: ${port}`)
})
