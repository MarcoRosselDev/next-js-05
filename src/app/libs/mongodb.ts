//const mongoose = require('mongoose');
import mongoose from "mongoose"

//const MONGO_URL = "mongodb://127.0.0.1/" // mongo db url al crear una base de datos
//pol.123.pol
//r8AmlzYisF88xN0I
//const MONGO_URL = "mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@hotel-project.kmjdfcv.mongodb.net/?retryWrites=true&w=majority&appName=hotel-project"
//const MONGO_URL = "mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@hotel-project.kmjdfcv.mongodb.net/"
//const MONGO_URL = "mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@marco0.udtj894.mongodb.net/"
const MONGO_URL = "mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@hotel-project.kmjdfcv.mongodb.net/"
const uri = "mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@hotel-project.kmjdfcv.mongodb.net/?appName=hotel-project";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export async function connectMongoDB() {
  try {
    await mongoose.connect(MONGO_URL)
    //await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Connected to MongoDB.");
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.disconnect();
  }
}

/* 

MONGO_URL='mongodb+srv://pythonmode9:r8AmlzYisF88xN0I@marco0.udtj894.mongodb.net/'
USERNAME='pythonmode9'
PASSWORD='r8AmlzYisF88xN0I'
PUERTO=3000
TOKEN_SECRET=asdf2341hjklc123jh2hfc087hurve79gy7bdu2387iqswdgy92jaw02932093485js

*/


/* async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
run().catch(console.dir); */