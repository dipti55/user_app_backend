const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  contact: String,
});

module.exports = mongoose.model("users", UserSchema);
