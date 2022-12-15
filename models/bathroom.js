const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  bathroomAM: {
    type: Number,
  },
  bathroomPM: {
    type: Number,
  },
  tracker: { type: Schema.Types.ObjectId, ref: "Tracker" },
});

module.exports = mongoose.model("Bathroom", bathroomSchema);
