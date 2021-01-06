const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  id: String,
  foodId: String,
  categoryId: String,
  levelId: String,
  packageId: String,
  quantity: Number,
  price: Number,
});

module.exports = mongoose.model("item", ItemSchema);
