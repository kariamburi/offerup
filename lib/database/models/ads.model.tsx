import { Document, Schema, model, models } from "mongoose";

export interface IAds extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  price: string;
  category: { _id: string; name: string };
  organizer: { _id: string; userEmail: string; fullName: string };
  constituency: string | null;
  youtube: string;
  contactNumber: number | null;
  negotiable: boolean;
  images: Array<any>;
  imgno: number;
  pack: string;
  views: number;
}

const AdsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  constituency: { type: String },
  createdAt: { type: Date, default: Date.now },
  youtube: { type: String },
  contactNumber: { type: String },
  imgno: { type: Number },
  pack: { type: String },
  views: { type: Number },
  images: { type: Array, required: true },
  price: { type: String },
  negotiable: { type: Boolean, default: false },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Ads = models.Ads || model("Ads", AdsSchema);

export default Ads;
