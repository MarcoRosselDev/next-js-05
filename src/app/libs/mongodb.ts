import mongoose from "mongoose"
const url = `${process.env.URL_USER_MDB}`

export async function connectMongoDB() {
  try {
    //await mongoose.connect(url, clientOptions)
    await mongoose.connect(url) // ahora me lanza error si aplico (url, clientOptions) ? por que seara?
    //await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to MongoDB.");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  }
}