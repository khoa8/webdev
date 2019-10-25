const express = require('express');

const app = express();
const port = 2222;
const host = '127.43.43.43';
let name = 'Khoa Nguyen';
let netid = 'sq9943';

app.get('/netID', (req, res) => res.send(`Name: ${name}, NetID: ${netid}`))

app.listen(port, host,  () => console.log(`NetID app listening on IPv4: ${host}:${port}`))