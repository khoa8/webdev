const express = require('express');
// const DataStore = require('nedb-promises');
// const db = DataStore.create(__dirname + '/toursDB');
const DataStore = require('nedb');
const db = new DataStore({filename: __dirname + '/toursDB', autoload: true});
const app = express();
const port = 1111;
const host = '127.43.43.8';

app.get('/tours', function (req, res) {
    db.find({}, function(err, docs) {
    if (err) {
        console.log("something is wrong");
    } else {
        console.log("We found " + docs.length + " documents");
        console.log(docs);
        res.json(docs);
    }
    });
});

// app.post('/tours/add', express.json(), function(req, res) {
// let tour = req.body;
// console.log(JSON.stringify(tour));
// tours.virtTours.push(tour);
// res.json(tours.virtTours);
// })


app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))