const { client } = require('../dbconnection');
const collection = client.db().collection('Cards');

async function getAllCards() {
    try {
        return await collection.find({}).toArray();
    } catch (error) {
        console.error("Error retrieving data:", error);
        throw error;
    }
}

async function addCard(name, desc, img) {
    try {
        return await collection.insertOne({ name, desc, img });
    } catch (error) {
        console.error("Error adding card:", error);
        throw error;
    }
}

module.exports = { getAllCards, addCard };