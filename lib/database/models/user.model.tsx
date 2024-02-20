import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  contactName: { type: String, required: true },
  contactNumber: { type: String, required: false },
  photo: { type: String, required: false },
  businessName: { type: String, required: false },
  facebooklink: { type: String, required: false },
  instagramlink: { type: String, required: false },
  youtubelink: { type: String, required: false },
});

const User = models.User || model("User", UserSchema);

export default User;
