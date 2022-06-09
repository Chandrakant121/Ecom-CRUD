const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.post("/create", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).send(product);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    res.status(500).send("error");
  }
});



router.patch("/:id/edit", async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, }).lean().exec();
    return res.status(201).send(product);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.delete("/:id/delete", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    res.status(500).send("error");
  }
});

module.exports = router;