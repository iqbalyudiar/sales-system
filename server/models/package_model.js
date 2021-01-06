const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PackageSchema = new Schema({
  id: String,
  name: String,
});

module.exports = mongoose.model("package", PackageSchema);
