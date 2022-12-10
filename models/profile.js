const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const profileSchema = new Schema({
  dogName: { type: String, required:true },
  breed: { type: String },
  age: { type: Number },
  weight: { type: Number },
  birthday: { type: String },
  vet: { type: String },
  user: { type: Schema.Types.ObjectId, ref: "User" }

});

module.exports = mongoose.model("Profile", profileSchema);
