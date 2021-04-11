import mongoose from "mongoose";

var usersSchema = new mongoose.Schema({
  username: String,
  password: String,
  ip: String,
  timestamp: String,
});

export default mongoose.model("users", usersSchema);
