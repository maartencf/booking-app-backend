const mongoose = require('mongoose');

// Replace the following with your Atlas connection string                                                                                                                                        
//const url = process.env.DB_CONN_STRING;
const url = "mongodb+srv://maartencf:VbDWdZ00u42adgxs@cluster-mongodb-martin.rajc2.mongodb.net/MeetingRooms?retryWrites=true&w=majority&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
console.log(url);
 
 // The database to use
 const dbName = "test";
                      
 async function run() {
    try {
        console.log("kom ik hier");
         await mongoose.connect(url);
         console.log("Connected correctly to server");
         //const col = mongoose.Collection("MeetingRooms");
         // Use the collection "people"
         //const col = collection("MeetingRooms");
         // Construct a document                                                                                                                                                              
         let meetingRoomDocument = {
             "roomId": 2,
             "roomName": "X-factor",
             "bookedTimes": [{
             "startDateTime": new Date('02-10-2020 12:00:00'),
             "endDateTime": new Date('02-10-2020 12:30:00'),
              }],
         };
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(meetingRoomDocument);
         //const t = await mongoose.Schema.
         // Find one document
         const myDoc = await col.find();
         // Print to the console
         console.log(myDoc);
        } catch (err) {
         console.log(err);
         process.exit(1);
     }
 
     finally {
         console.log("finally");
        await client.close();
    }
 }
run().catch(console.dir);