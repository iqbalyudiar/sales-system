const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model("food", FoodSchema);
