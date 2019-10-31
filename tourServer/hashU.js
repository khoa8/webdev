const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./usersTours.json');
let nRounds = 10;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// Your code here to process the passwords
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

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("userTourHash.json", JSON.stringify(hashedUsers, null, 2));