
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