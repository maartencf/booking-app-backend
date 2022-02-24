import mongoose from 'mongoose';

export const connectToDatabase = async () => {
const url = process.env.DB_CONN_STRING;
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongo DB server");
    } catch (err) {
        console.log(err.stack);
        process.exit(1);
    }
}
