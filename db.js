const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/user_api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});
const db = mongoose.connection;
module.exports = db;
// module.exports = mongoose.Connection;
