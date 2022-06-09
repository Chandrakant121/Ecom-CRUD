const express = require("express");
const Brand = require("../models/brand.model");
const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const brand = await Brand.find().lean().exec();
    res.status(200).send(brand);
  } catch (error) {
    res.status(500).send("Error");
  }
});


router.post("/create", async (req, res) => {
  try {
    const brand = await Brand.create(req.body);
    return res.status(201).send(brand);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.get("/:id", async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id).lean().exec();
    return res.status(200).send(brand);
  } catch (error) {
    res.status(500).send("error");
  }
});



router.patch("/:id/edit", async (req, res) => {
  try {
    const brand = await Brand.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, }).lean().exec();
    return res.status(201).send(brand);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.delete("/:id/delete", async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(brand);
  } catch (error) {
    res.status(500).send("error");
  }
});

module.exports = router;