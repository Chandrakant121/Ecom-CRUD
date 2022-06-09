const express = require("express");
const User = require("../models/user.model");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find().lean().exec();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).send(user);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error");
  }
});



router.patch("/:id/edit", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, }).lean().exec();
    return res.status(201).send(user);
  } catch (error) {
    res.status(500).send("error");
  }
});


router.delete("/:id/delete", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(user);
  } catch (error) {
    res.status(500).send("error");
  }
});

module.exports = router;