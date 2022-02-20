const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const t = process.env.DB_CONN_STRING;
console.log(t);
const url = "mongodb+srv://maartencf:VbDWdZ00u42adgxs@cluster-mongodb-martin.rajc2.mongodb.net/MeetingRooms?retryWrites=true&w=majority&w=majority&useNewUrlParser=true&useUnifiedTopology=true";
const client = new MongoClient(url);
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}
run().catch(console.dir);