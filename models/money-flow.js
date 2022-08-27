const mongoose = require("mongoose");

const moneyFlowSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  description: {
    type: String,
  },
  currency: {
    type: mongoose.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const moneyFlow = mongoose.model("MoneyFlow", moneyFlowSchema);

module.exports = moneyFlow;
