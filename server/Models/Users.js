const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: "string", require: true },
  password: { type: "string", require: true },
  college: { type: "string", require: true },
  date: { required: true, type: Date, default: Date.now },
  poster_path: {
    type: String,
    default:
      "https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png",
  },
  email: { type: "string", require: true },
  location: { type: "string", trim: true },
  isStudent: { type: "boolean", required: true, default: true },
  isOrganizer: { type: "boolean", required: false, default: false },
  isSponsor: { type: "boolean", required: false, default: false },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
