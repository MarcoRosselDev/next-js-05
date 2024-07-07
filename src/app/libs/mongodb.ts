import mongoose from "mongoose"

const MONGO_URL = "mongodb://127.0.0.1/" // mongo db url al crear una base de datos

export async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log("Connected to MongoDB.");
    
  } catch (error) {
    console.log(error);
  }
}