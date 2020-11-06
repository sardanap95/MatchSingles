const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { Type: String, require: true },
  gender: { Type: String, require: true },
  bio: { Type: String, require: true },
  synopsis: String
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;