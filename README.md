**Student Name**:  Khoa Nguyen

**NetID**: sq9943

# Homework #9 Solutions

## Question 1 
### (a) 

```code
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/usersDB');
const users = require('./users.json');

async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} users`);
        let newDocs = await db.insert(users);
        console.log(`Added ${newDocs.length} users`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();
```

### (b)

```code
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/toursDB');
const tours = require('./tours.json');

async function initialize() {
    try {
        let numRemoved = await db.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await db.insert(tours);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize();
```

## Question 2
### (a)
```code
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
```

### (b)
```code
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
```
### (c)

![2c](images/2c.png)

### (d)

It is important to keep logs of various activities associated with the web app because it's helpful in identifying critical network issues, malicious attacks on the system, or some other suspicious system activities like unauthorized logins, login failures, and errors on network devices.

## Question 3
### (a)

```code
hashedUsers = users.map(data =>{
    let salt = bcrypt.genSaltSync(nRounds);
    let passHash = bcrypt.hashSync(data.password, salt);

    return {
        "firstName": data.firstName,
        "lastName" : data.lastName,
        "email": data.email,
        "passHash": passHash,
        "role": data.role
    };
 
});
```

```code
{
    "firstName": "Arlen",
    "lastName": "Melton",
    "email": "sided1830@outlook.com",
    "passHash": "$2a$10$wLw5wfjKqOuyQUgj9V6BLORXXaih.3FwMYNbCMwvwqn4ZOrYRF8C.",
    "role": "admin"
  },
  {
    "firstName": "Luna",
    "lastName": "Munoz",
    "email": "sylvan2059@live.com",
    "passHash": "$2a$10$4SEhyH8knJg5kaA6z7zeROg2UVw6fAYhtzsDy2dzHc6MPj35P9k32",
    "role": "customer"
  }
```

### (b)

![3b](images/3b.png)

## Question 4
### (a)

```code
const data = require('./userTourHash.json');
const bcrypt = require('bcryptjs');

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
```
## Question 5

### (a)

```code

const fetch = require("node-fetch");

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "sided1830@outlook.com", password: 'C}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Good email, good password: ');
    console.log(data);
  })
  .catch((err) => console.log(err))

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "sided1830@outlook.com", password: 'KC}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Good email, incorrect password: Code 401: ')
    console.log(data);
  })
  .catch((err) => console.log(err))

fetch("http://127.43.43.8:1111/login", {
    method: 'POST',
    body: JSON.stringify({email: "Ksided1830@outlook.com", password: 'C}m8\"L,F'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => {
    console.log('');
    console.log('Bad email (user not found): Code 401: ')
    console.log(data);
  })
  .catch((err) => console.log(err))
```
![5](images/5.png)
