const Card = require('../models/card');

async function getAllCards(req, res) {
    try {
        const cards = await Card.getAllCards();
        res.json({ statusCode: 200, data: cards, message: 'Get all cards success' });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
}


async function addCard(req, res) {
    try {
        const { name, desc, img } = req.body;
        await Card.addCard(name, desc, img);
        res.json({ statusCode: 200, message: 'Card added successfully' });
    } catch (error) {
        console.error("Error adding card:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
}

module.exports = { getAllCards, addCard };