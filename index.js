var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express()

const uri = "mongodb+srv://shubh1838383:Test123@cluster0.mf8nfr5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let collection;

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
        collection = client.db().collection('Cards');
        console.log(collection);
    } catch (ex) {
        console.error(ex);
    }
}

runDBConnection();

app.get('/', (req, res) => {
    res.render('index.html');
});

app.get('/api/cards', async (req, res) => {
    try {
        // Retrieve data from the collection
        const result = await collection.find({}).toArray();
        res.json({ statusCode: 200, data: result, message: 'Get all cards success' });
    } catch (error) {
        console.error("Error retrieving data:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
})

app.post('/api/addCard', async (req, res) => {
    try {

        const { name, desc, img } = req.body;


        const result = await collection.insertOne({ name, desc, img });

        res.json({ statusCode: 200, message: 'Card added successfully' });
    } catch (error) {
        console.error("Error adding card:", error);
        res.status(500).json({ statusCode: 500, message: "Internal Server Error" });
    }
})

// const cardList = [
//     { name: 'Student Clubs', desc: 'Great way to meet like-minded individuals, develop leadership skills. ', img: 'https://img.freepik.com/premium-vector/happy-students-with-books-isolated-background_165429-745.jpg' },
//     { name: 'Fitness Classes', desc: 'C', img: 'https://t3.ftcdn.net/jpg/02/35/79/28/360_F_235792895_0SoLUsJ2PVOnjLWRtAqd6gLDuKJaDw93.jpg' },
//     { name: 'Cultural Events', desc: ' Attend cultural events, performances, art exhibitions.', img: 'https://png.pngtree.com/element_our/20200703/ourlarge/pngtree-cartoon-cute-vector-free-female-dance-student-in-dance-training-class-image_2300688.jpg' },
// ];

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})