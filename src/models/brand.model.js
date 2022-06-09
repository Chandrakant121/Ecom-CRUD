const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    img_url: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Brand = mongoose.model("brand", brandSchema);
module.exports = Brand;