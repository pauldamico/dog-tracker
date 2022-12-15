const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const treatsSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  treatsAM: {
    type: Number,
  },
  treatsPM: {
    type: Number,
  },
  tracker: { type: Schema.Types.ObjectId, ref: "Tracker" },
});

module.exports = mongoose.model("Treats", treatsSchema);
