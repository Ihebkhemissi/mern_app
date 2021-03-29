const express = require("express");

const app = express();

require("dotenv").config();

const connectDB = require("./config/connectDB");
connectDB();
app.use(express.json());
app.use("/api/contacts", require("./routes/contact"));

const PORT = process.env.PORT;

app.listen(PORT, (error) =>
  error
    ? console.error(error)
    : console.log(`server is running on port ${PORT}...`)
);
