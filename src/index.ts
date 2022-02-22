import express from "express";
import { connectToDatabase } from './config/db'
//import config from "dotenv";
require('dotenv').config();

connectToDatabase();

const app = express();
const port = process.env.PORT; // 8080 // process.env.PORT; // default port to listen

// ** TODO ** Replace this code with a call to your games router class to handle all calls to /games endpoint
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/bookMeetingRooms', require('./routes/bookMeetingRoomsRoutes'));

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);

    // ** TODO ** Call to Game Service to initiate connection
});
