const mongoose = require('mongoose');
const mongoURL = process.env.MONGO_URL;

const connectToMongo = async () => {
  console.log(mongoURL)
  try {
    await mongoose.connect(mongoURL);
    console.log('connected to mongoose');
  } catch (error) {
    console.log(error)
    console.log(error.message);
  }
};

module.exports = connectToMongo;
