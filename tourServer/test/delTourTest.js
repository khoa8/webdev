const initDB = require('../tourDBInit');
const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');
const tourDB = require('../tourDBRef');

describe('Delete Tour Tests', function () {
    let res0, res1, res2;
    let tours = null;
    let agent = request.agent(app);
    before(async function(){
        res0 = await initDB();
    })
    it('Login as admin, delete tour', async function(){
        res1 = await agent.post('/login')
            .send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
        console.log(res1.text);
        let a = await tourDB.findOne({Name: "Ha Noi"});
        res2 = await agent.delete('/delete')
            .send({"_id": a._id});
        
        console.log(`Deleting TourID: ${a._id}`);
        console.log(`Deleted ${res2.text} tour`);
        let b = await tourDB.find({});
        assert.equal(b.length, 2);
    });
    it('Guest try to delete tour', async function(){
        res1 = await agent.get('/logout');
        let a = await tourDB.findOne({Name: "Da Nang"});
        res2 = await agent.delete('/delete')
            .send({"_id": a._id});
        console.log(`Deleting TourID: ${a._id}`);
        console.log(res2.text);
        let b = await tourDB.find({});
        assert.equal(b.length, 2);
    });
    it('Customer try to delete tour', async function(){
        res1 = await agent.post('/login')
            .send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
        console.log(res1.text);
        let a = await tourDB.findOne({Name: "Da Nang"});
        res2 = await agent.delete('/delete')
            .send({"_id": a._id});
        
        console.log(`Deleting TourID: ${a._id}`);
        console.log(res2.text);

        let b = await tourDB.find({});
        assert.equal(b.length, 2);
    });
})
