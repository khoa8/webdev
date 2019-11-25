const DataStore = require('nedb-promises');
let tourDB = DataStore.create(__dirname + '/toursDB');
module.exports = tourDB;