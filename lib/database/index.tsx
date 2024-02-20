import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  // if (!MONGODB_URI) throw new Error("MONGODB_URI is missing paul");

  cached.promise =
    cached.promise ||
    mongoose.connect(
      "mongodb+srv://paulirungu:0lbQiEu2hMhynWGa@clusterofferup.kfn7otb.mongodb.net/",
      {
        dbName: "Offerup",
        bufferCommands: false,
      }
    );

  cached.conn = await cached.promise;

  return cached.conn;
};
