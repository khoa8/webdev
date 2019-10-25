const request_promise = require('request-promise-native');

let site = {
    uri: 'https://windsurf.grotto-networking.com/data/logs/windEvents2013.json', 
    json: true 
};
    
request_promise(site).then(function(data){ 
    let max10sec = data.map(m => m.max10sec); 
    let distance = data.map(d => d.distance); 
    let s = max10sec.reduce((accumulator, currentValue) => {return Math.max(accumulator, currentValue)}); 
    let d = distance.reduce((accumulator, currentValue) => {return Math.max(accumulator, currentValue)}); 
    console.log(`The number of sailing sessions in 2013 was: ${data.length}`);
    console.log(`The fastest 10 second speed average was: ${s}`); 
    console.log(`The longest single day distance was: ${d}`); 
})