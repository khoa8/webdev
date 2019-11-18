const express = require('express');
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/toursDB');
// const DataStore = require('nedb');
// const db = new DataStore({filename: __dirname + '/toursDB', autoload: true});
const app = express();
const port = 1111;
const host = '127.43.43.8';

app.get('/tours', async (req, res) => {
    try {
    let find = await db.find({});
    console.log(`We found ${find.length} documents`);
    console.log(find);
    res.json(find);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
});

app.post('/addTours', express.json(), async (req, res) => {
    try {
    let tour = req.body;
    console.log(JSON.stringify(tour));
    let newDocs = await db.insert(tour);
    console.log(`Added tours:`);
    console.log(newDocs);
    let find = await db.find({});
    console.log(`We found ${find.length} documents`);
    console.log(find);
    res.json(find);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
});


app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))