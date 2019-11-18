const rp = require('request-promise-native');

let site = {
    uri: 'http://127.43.43.8:1111/addTours',
    json: true,
    method: "POST",
    body: {Name: "NewTour",
    Date: "NewDate"}
};
rp(site).then(function(data){
    data.forEach(function(tour, i) {
    console.log(`Tour ${i+1} name ${tour.Name}, date: ${tour.Date}`);
    });
    }).catch(function(err){
console.log(`Error: ${err}`);
})