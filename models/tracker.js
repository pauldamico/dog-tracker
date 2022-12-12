const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bathroom: { am: { type: Array }, pm: { type: Array } },
  treats: { am: { type: Array }, pm: { type: Array } },
  food: {
    morning: { type: Boolean },
    lunch: { type: Boolean },
    dinner: { type: Boolean },
  },
  medical: {
    medicineName: { type: String },
    lastMedicineDate: { type: Date },
    nextVetApt: { type: Date },
  },
  groomed: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Tracker", trackerSchema);
