import express from "express";
import { connectToDatabase } from './config/db'
require('dotenv').config();

connectToDatabase();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/api/bookMeetingRooms', require('./routes/bookMeetingRoomsRoutes'));

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
