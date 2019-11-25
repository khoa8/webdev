const tourDB = require('./tourDBRef');
const tours = require('./tours.json');

async function initDB() {
    try {
        let numRemoved = await tourDB.remove({}, {multi: true});
        console.log(`Cleanup, removed ${numRemoved} tours`);
        let newDocs = await tourDB.insert(tours);
        console.log(`Added ${newDocs.length} tours`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

//initDB();
module.exports = initDB;