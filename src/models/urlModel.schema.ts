import mongoose, { Schema } from "mongoose";

const urlSchema = new Schema({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true, unique: true },
});

export const Url = mongoose.model("Url", urlSchema);

export interface UrlDocument extends mongoose.Document {
  longUrl: string;
  shortUrl: string;
}
