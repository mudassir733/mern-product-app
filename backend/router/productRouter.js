const express = require("express");
const Product = require("../models/productSchema");

const routes = express.Router();

// Post the product Data
routes.post("/api/product", async (req, res) => {
  try {
    const product = new Product(req.body);
    const productCreate = await product.save();
    res.status(201).send(productCreate);
  } catch (error) {
    res.status(400).send(error);
  }
});

// get the product Data
routes.get("/api/product", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// put the product data by ID
routes.put("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete the product data by ID

routes.delete("/api/product/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = routes;
