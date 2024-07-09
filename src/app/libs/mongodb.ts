//const mongoose = require('mongoose');
import mongoose from "mongoose"


const url = "mongodb+srv://andresmarcorossel:RT89AC9nZPrr2HXF@cluster0.c4yrghf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } }

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
  /* } finally {
    await mongoose.disconnect();
  } */
}

/* 
//username:andresmarcorossel
//RT89AC9nZPrr2HXF */
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