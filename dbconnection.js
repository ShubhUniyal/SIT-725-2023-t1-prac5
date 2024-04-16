const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://shubh1838383:Test123@cluster0.mf8nfr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function runDBConnection() {
    try {
        await client.connect();
        console.log("Connected to the database");
    } catch (ex) {
        console.error("Error connecting to the database:", ex);
    }
}

module.exports = { client, runDBConnection };