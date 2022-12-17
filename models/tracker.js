const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const todaysDate = `${
  date.getMonth() + 1
} ${date.getDate()} ${date.getFullYear()}`;
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
  food: {
    breakfast: { type: Boolean },
    lunch: { type: Boolean},
    dinner: { type: Boolean },
  },
  medical: {
    medicineName: { type: String },
    lastMedicineDate: { type: Date },
    nextVetApt: { type: Date },
  },
  groomed: { type: String },
  date: { type: String, default: todaysDate },
});

module.exports = mongoose.model("Tracker", trackerSchema);
