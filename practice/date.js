const express = require('express');

const app = express();
const port = 5150;
const host = '127.43.43.1';
let dateTime = new Date();

app.get('/date', (req, res) => res.send(`${dateTime}`))

app.listen(port, host,  () => console.log(`Date and Time app listening on IPv4: ${host}:${port}`))