const request_promise = require('request-promise-native'); 
const fetch = require("node-fetch");

let site = { 
    uri: 'http://127.43.43.8:1111/tours', 
    json: true 
}; 
fetch("http://127.43.43.8:1111/tours/add", {
    method: 'POST',
    body: JSON.stringify({Name: 'new!', Date: 'unknow!'}),
    headers: { "Content-Type": "application/json" }
  }).then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))   
request_promise(site).then(function(data){ 
    data.map((element, index) => {
        console.log(`Tour ${index+1} name ${element.Name}, date: ${element.Date}`);
})});