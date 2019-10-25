const request_promise = require('request-promise-native'); 

let site = { 
    uri: 'https://windsurf.grotto-networking.com/data/tracks/track_2013_10_28.json', 
    json: true }; 
    
request_promise(site).then(function(data){ 
console.log(`The start time of track_2013_10_28 was: ${data.start_time}`);
console.log(`The session lasted ${data.points.length/60} minutes`);
})