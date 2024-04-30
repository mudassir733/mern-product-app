const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/productData", {})
  .then(() => {
    console.log("database connection established");
  })
  .catch((error) => {
    console.log("database connection failed", error);
  });
