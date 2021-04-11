var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var usersSchema = new Schema({
  username: String,
  password: String,
  ip: String,
  timestamp: Object,
});
module.exports = mongoose.model("Expense", usersSchema);
