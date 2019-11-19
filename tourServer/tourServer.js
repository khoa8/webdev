const express = require('express');
const session = require('express-session');
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/toursDB');
const db2 = DataStore.create(__dirname + '/usersDB');
// const DataStore = require('nedb');
// const db = new DataStore({filename: __dirname + '/toursDB', autoload: true});
const app = express();
const port = 1111;
const host = '127.43.43.8';

const cookieName = "sq9943";
app.use(session({
    secret: 'khoa',
    resave: false,
    saveUninitialized: false,
    name: cookieName
}));

const setUpSessionMiddleware = (req, res, next) => {
    console.log(`session object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {role: "guest"};
    };
    next();
};

app.use(setUpSessionMiddleware);

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


app.post('/login', express.json(), async (req, res) => {
    try {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    
    let auser = await db2.find({email});
    if (!auser) {
        res.status(401).json({error: true, message: "User/Password error"});
        return;
    }
    if (password === auser.password) {
        let oldInfo = req.session.user;
        req.session.regenerate(function (err) {
            if (err) {console.log(err);
            }
        let newUserInfo = Object.assign(oldInfo, auser);
        delete newUserInfo.password;
        req.session.user = newUserInfo;
        res.json(newUserInfo);
    });
    } else {
        res.status(401).json({error: true, message: "User/Password error"});
    }
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
});

app.get('/logout', (req, res) => {
    let options = req.session.cookie;
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options);
        res.json({message: "Goodbye"});
    })
});

app.listen(port, host,  () => console.log(`TourServer listening on IPv4: ${host}:${port}`))