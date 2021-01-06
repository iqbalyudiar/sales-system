const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LevelSchema = new Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model("level", LevelSchema);
