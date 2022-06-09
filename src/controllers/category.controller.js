const express = require("express");
const Category = require("../models/category.model");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const category = await Category.find().lean().exec();
    res.status(200).send(category);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.post("/create", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).send(category);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).lean().exec();
    return res.status(200).send(category);
  } catch (error) {
    res.status(500).send("error");
  }
});



router.patch("/:id/edit", async (req, res) => {
  try {
    const category = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, }).lean().exec();
    return res.status(201).send(category);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.delete("/:id/delete", async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(category);
  } catch (error) {
    res.status(500).send("error");
  }
});

module.exports = router;