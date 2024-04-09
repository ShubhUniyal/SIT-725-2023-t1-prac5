var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardList = [
    { name: 'Student Clubs', desc: 'Great way to meet like-minded individuals, develop leadership skills. ', img: 'https://img.freepik.com/premium-vector/happy-students-with-books-isolated-background_165429-745.jpg' },
    { name: 'Fitness Classes', desc: 'Attend fitness classes or utilize the college gym facilities', img: 'https://t3.ftcdn.net/jpg/02/35/79/28/360_F_235792895_0SoLUsJ2PVOnjLWRtAqd6gLDuKJaDw93.jpg' },
    { name: 'Cultural Events', desc: ' Attend cultural events, performances, art exhibitions.', img: 'https://png.pngtree.com/element_our/20200703/ourlarge/pngtree-cartoon-cute-vector-free-female-dance-student-in-dance-training-class-image_2300688.jpg' },
];
app.get('/api/cards', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
})

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})