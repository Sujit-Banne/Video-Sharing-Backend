const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

mongoose
  .connect("mongodb+srv://DushyantBhardwaj22:dushyant@cluster0.tnwa2ux.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });