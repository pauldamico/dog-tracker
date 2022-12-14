const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date();
const todaysDate = `${
  date.getMonth() + 1
} ${date.getDate()} ${date.getFullYear()}`;
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  
  bathroomAM: {
    1: {
      number: { type: Number, default: 1 },
      selected: { type: Boolean, default:false },
    },
    2: {
      number: { type: Number, default:2},
      selected: { type: Boolean, default:false },
    },
    3: {
      number: { type: Number, default: 3 },
      selected: { type: Boolean, default:false },
    },
    4: {
      number: { type: Number, default: 4 },
      selected: { type: Boolean, default:false },
    },
    5: {
      number: { type: Number, default: 5 },
      selected: { type: Boolean, default:false },
    },
    6: {
      number: { type: Number, default: 6 },
      selected: { type: Boolean, default:false },
    },
    7: {
      number: { type: Number, default: 7 },
      selected: { type: Boolean, default:false },
    },
    8: {
      number: { type: Number, default: 8 },
      selected: { type: Boolean, default:false },
    },
    9: {
      number: { type: Number, default: 9 },
      selected: { type: Boolean, default:false },
    },
    10: {
      number: { type: Number, default: 10 },
      selected: { type: Boolean, default:false },
    },
    11: {
      number: { type: Number, default: 11 },
      selected: { type: Boolean, default:false },
    },
    12: {
      number: { type: Number, default: 12 },
      selected: { type: Boolean, default:false },
    },
  },

  bathroomPM: {
    1: {
      number: { type: Number, default: 1 },
      selected: { type: Boolean, default:false },
    },
    2: {
      number: { type: Number, default: 2 },
      selected: { type: Boolean, default:false },
    },
    3: {
      number: { type: Number, default: 3 },
      selected: { type: Boolean, default:false },
    },
    4: {
      number: { type: Number, default: 4 },
      selected: { type: Boolean, default:false },
    },
    5: {
      number: { type: Number, default: 5 },
      selected: { type: Boolean, default:false },
    },
    6: {
      number: { type: Number, default: 6 },
      selected: { type: Boolean, default:false },
    },
    7: {
      number: { type: Number, default: 7 },
      selected: { type: Boolean, default:false },
    },
    8: {
      number: { type: Number, default: 8},
      selected: { type: Boolean, default:false },
    },
    9: {
      number: { type: Number, default: 9},
      selected: { type: Boolean, default:false },
    },
    10: {
      number: { type: Number, default: 10 },
      selected: { type: Boolean, default:false },
    },
    11: {
      number: { type: Number, default: 11 },
      selected: { type: Boolean, default:false },
    },
    12: {
      number: { type: Number, default: 12 },
      selected: { type: Boolean, default:false },
    },
  },
  treatsAM: {
    1: {
      number: { type: Number, default: 1 },
      selected: { type: Boolean, default:false },
    },
    2: {
      number: { type: Number, default: 2 },
      selected: { type: Boolean, default:false },
    },
    3: {
      number: { type: Number, default: 3 },
      selected: { type: Boolean, default:false },
    },
    4: {
      number: { type: Number, default: 4 },
      selected: { type: Boolean, default:false },
    },
    5: {
      number: { type: Number, default: 5 },
      selected: { type: Boolean, default:false },
    },
    6: {
      number: { type: Number, default: 6 },
      selected: { type: Boolean, default:false },
    },
    7: {
      number: { type: Number, default: 7 },
      selected: { type: Boolean, default:false },
    },
    8: {
      number: { type: Number, default: 8 },
      selected: { type: Boolean, default:false },
    },
    9: {
      number: { type: Number, default: 9 },
      selected: { type: Boolean, default:false },
    },
    10: {
      number: { type: Number, default: 10 },
      selected: { type: Boolean, default:false },
    },
    11: {
      number: { type: Number, default: 11 },
      selected: { type: Boolean, default:false },
    },
    12: {
      number: { type: Number, default: 12 },
      selected: { type: Boolean, default:false },
    },
  },

  treatsPM: {
    1: {
      number: { type: Number, default: 1 },
      selected: { type: Boolean, default:false },
    },
    2: {
      number: { type: Number, default: 2 },
      selected: { type: Boolean, default:false },
    },
    3: {
      number: { type: Number, default: 3 },
      selected: { type: Boolean, default:false },
    },
    4: {
      number: { type: Number, default: 4 },
      selected: { type: Boolean, default:false },
    },
    5: {
      number: { type: Number, default: 5 },
      selected: { type: Boolean, default:false },
    },
    6: {
      number: { type: Number, default: 6 },
      selected: { type: Boolean, default:false },
    },
    7: {
      number: { type: Number, default: 7 },
      selected: { type: Boolean, default:false },
    },
    8: {
      number: { type: Number, default: 8 },
      selected: { type: Boolean, default:false },
    },
    9: {
      number: { type: Number, default: 9 },
      selected: { type: Boolean, default:false },
    },
    10: {
      number: { type: Number, default: 10 },
      selected: { type: Boolean, default:false },
    },
    11: {
      number: { type: Number, default: 11 },
      selected: { type: Boolean, default:false },
    },
    12: {
      number: { type: Number, default: 12 },
      selected: { type: Boolean, default:false },
    },
  },
  food: {
    morning: { type: Boolean, default:false },
    lunch: { type: Boolean,default:false },
    dinner: { type: Boolean, default:false },
  },
  medical: {
    medicineName: { type: String },
    lastMedicineDate: { type: Date },
    nextVetApt: { type: Date },
  },
  groomed: { type: String },
  date: { type: String, default: todaysDate},
});

module.exports = mongoose.model("Tracker", trackerSchema);
