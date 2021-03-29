const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database connect`);
  } catch (error) {
    console.error(`not connect ${error}`);
  }
};

module.exports = connectDB;
