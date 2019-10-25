const request_promise = require('request-promise-native'); 

let site = { 
    uri: 'http://127.43.43.8:1111/tours', 
    json: true 
}; 
    
request_promise(site).then(function(data){ 
    data.map((element, index) => {
        console.log(`Tour ${index+1} name ${element.Name}, date: ${element.Date}`);
})});