const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  eventType: {
    type: String,
    require: true,
  },
  organiser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Orgainser",
    require: true,
  },
  title: {
    type: String,
    require: true,
    trim: true,
  },
  mode: String,
  poster_path: String,
  location: String,
  content: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  socials: [String],
  hostedBy: String,
  heldOn: String,
  sponsors: [String],
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
