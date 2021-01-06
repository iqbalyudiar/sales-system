const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  id: String,
  itemId: [String],
  total_price: Number,
  updatedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("order", OrderSchema);
