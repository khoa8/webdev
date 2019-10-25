const express = require('express');

const app = express();
const port = 1111;
const host = '127.43.43.8';
let name = 'Khoa Nguyen';
let netid = 'sq9943';
let dateTime = new Date();

app.get('/', (req, res) => res.send(`${dateTime} Name: ${name}, NetID: ${netid}`))

app.listen(port, host,  () => console.log(`Combine app listening on IPv4: ${host}:${port}`))