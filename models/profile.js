const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
  dogName: { type: String },
  breed: { type: String },
  age: { type: Number },
  weight: { type: Number },
  birthday: { Type: Date },
  vet: { Type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" }

});

module.exports = mongoose.model("Profile", profileSchema);
