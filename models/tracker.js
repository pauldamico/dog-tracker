const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const date = new Date()
const todaysDate = `${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()}`
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bathroomAM: [String],
  bathroomPM: [String],
  treatsAM:[String] ,
  treatsPM:[String] ,
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
  date: { type: String, default: todaysDate, unique:true},
});

module.exports = mongoose.model("Tracker", trackerSchema);
