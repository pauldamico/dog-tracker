const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const trackerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  bathroom: { am:{type:Array}, pm:{type:Array} },
  treats: { am:{type:Array}, pm:{type:Array} },
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
  hairCut: { type: String },
});

module.exports = mongoose.model("Tracker", trackerSchema);

// am12: { type: Boolean },
// am1: { type: Boolean },
// am2: { type: Boolean },
// am3: { type: Boolean },
// am4: { type: Boolean },
// am5: { type: Boolean },
// am6: { type: Boolean },
// am7: { type: Boolean },
// am8: { type: Boolean },
// am9: { type: Boolean },
// am10: { type: Boolean },
// am11: { type: Boolean },
// pm12: { type: Boolean },
// pm1: { type: Boolean },
// pm2: { type: Boolean },
// pm3: { type: Boolean },
// pm4: { type: Boolean },
// pm5: { type: Boolean },
// pm6: { type: Boolean },
// pm7: { type: Boolean },
// pm8: { type: Boolean },
// pm9: { type: Boolean },
// pm10: { type: Boolean },
// pm11: { type: Boolean },
