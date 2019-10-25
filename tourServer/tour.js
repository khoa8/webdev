const express = require('express');
const data = require('./tours.json');

const app = express();
const port = 1111;
const host = '127.43.43.8';

app.get('/tours', (req, res) => res.send(data))

app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))