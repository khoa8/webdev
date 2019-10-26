const request_promise = require('request-promise-native'); 

let site = { 
    uri: 'http://127.43.43.8:1111/tours/add', 
    json: true 
}; 
fetch("/tours/add", {
    method: 'POST',
    body: JSON.stringify({Name: 'new!', Date: 'unknow!'}),
    headers: new Headers({ "Content-Type": "application/json" })
  });   
request_promise(site).then(function(data){ 
    data.map((element, index) => {
        console.log(`Tour ${index+1} name ${element.Name}, date: ${element.Date}`);
})});