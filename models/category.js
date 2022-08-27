const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
  },
  isIncome: {
    type: Boolean,
    required: true,
    default: false,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  parentCategory: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
  },
});

const category = mongoose.model("Category", categorySchema);

module.exports = category;
