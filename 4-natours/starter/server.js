const mongoose = require('mongoose');
const dotenv = require('dotenv');

// synchronous issues
// console.log(x);
process.on('uncaughtException', (err) => {
  console.log('uncaughtException', err.name, err.message);
  console.log('Uncaught exception happened, shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => console.log('DB connection was successful'));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('unhandledRejection:', err.name, err.message);
  console.log('Unhandled Rejection happened, shutting down...');
  server.close(() => process.exit(1));
});
