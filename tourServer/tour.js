const express = require('express');
const data = require('./tours.json');
const bodyParser = require('body-parser');

const app = express();
const port = 1111;
const host = '127.43.43.8';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded());
app.post('/tours/add', (req, res) => {
    data += req.body;
    console.log(req.body);
    res.json(req.body);
})

app.get('/tours', (req, res) => res.send(data))

app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))