const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: "string", require: true },
  password: { type: "string", require: true },
  college: { type: "string", require: true },
  date: { required: true, type: Date, default: Date.now },
  email: { type: "string", require: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
