const express = require("express");
const productRouter = require("./router/productRouter");
require("./database/connect");

const app = express();

// Middleware
app.use(express.json());
app.use(productRouter);
app.use(express.static("dist"));

const port = process.env.PORT || 5181;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
