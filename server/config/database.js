// #1 Import mongoose
const mongoose = require('mongoose');

// #2 Create a query string to cnnect to MongoDB server
const DB_URI =
  'mongodb+srv://admin:admin123@cluster0-4jtkl.gcp.mongodb.net/test?retryWrites=true&w=majority';

// #3 Connect to MongoDB
mongoose.connect(DB_URI, { userNewUrlParser: true });

// #4 Add basic event listeners on the mongoose.connection object
mongoose.connection.once('open', () =>
  console.log('Connected to a MongoDB instance')
);
mongoose.connection.on('error', error => console.error(error));

// #5 Export mongoose. You'll use it in server/server.js file
module.exports = mongoose;
