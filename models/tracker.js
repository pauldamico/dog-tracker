const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const todaysDate = `${
  date.getMonth() + 1
}/${date.getDate()}/${date.getFullYear()}`;
const d = new Date();
const time = d.getTime();
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },

  bathroomAM: [
    {
      n: {
        type: String,
        required: true,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  ],

  bathroomPM: [
    {
      n: {
        type: String,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  ],
  treatsAM: [
    {
      n: {
        type: String,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  ],

  treatsPM: [
    {
      n: {
        type: String,
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  ],
  fedBreakfast: { type: Boolean, default: false },
  fedLunch: { type: Boolean, default: false },
  fedDinner: { type: Boolean, default: false },
  medicalNotes: { type: String },
  vetApt: { type: String },
  groomed: { type: String },
  date: { type: String, default: todaysDate},
  dateOrder: { type: String, default: time },
});

module.exports = mongoose.model("Tracker", trackerSchema);
