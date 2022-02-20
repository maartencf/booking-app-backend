//import { MongoClient } from "mongodb";
//import { Mongoose } from "mongoose";
import mongoose from 'mongoose';

export const connectToDatabase = async () => {
const url = process.env.DB_CONN_STRING;
console.log(url);
//const client = new MongoClient(url);
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongo DB server");
    } catch (err) {
        console.log(err.stack);
        process.exit(1);
    }
}
//run().catch(console.dir);