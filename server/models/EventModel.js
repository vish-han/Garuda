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
  poster: String,
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
  sponsors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
    },
  ],
});

const Event = mongoose.model("Event", EventSchema);
module.exports = Event;
