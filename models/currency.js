const mongoose = require("mongoose");

const currencySchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const currency = mongoose.model("Currency", currencySchema);

module.exports = currency;
