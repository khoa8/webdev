const express = require('express');
const data = require('./userTourHash.json');
//const data1 = require('./tours.json');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const port = 1111;
const host = '127.43.43.8';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded());

// app.post('/tours/add', (req, res) => {
//     data1.push(req.body);
//     console.log(req.body);
//     res.json(req.body);
// })


app.post('/login', function (req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    let user = data.find( u => {
        return u.email === email
    });
    if (user) {
    	let verified = bcrypt.compareSync(password, user.passHash);
    	if (verified) {
    	    res.json({
            "firstName": user.firstName,
            "lastName" : user.lastName,
            "email": user.email,
            "role": user.role
            });
        } else {
            res.status(401).json({error: true, message: "Password error"});
    	}
	} else {
        res.status(401).json({error: true, message: "User error"});
    }   
});

//app.get('/tours', (req, res) => res.send(data))

app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))