const initDB = require('../tourDBInit');
const app = require('../tourServer');
const assert = require('chai').assert;
const request = require('supertest'); 
const cookie = require('cookie');
const tourDB = require('../tourDBRef');

describe('Add Tour Tests', function () {
    let res0, res1, res2;
    let tours = null;
    let agent = request.agent(app);
    before(async function(){
        res0 = await initDB();
    })
    it('Login as admin, add tour', async function(){
        res1 = await agent.post('/login')
            .send({"email": "sided1830@outlook.com", "password": "C}m8\"L,F"});
        console.log(res1.text);
        res2 = await agent.post('/addTours')
            .send({"Name": "KhoaNguyenTour", "Date": "HappyThanksGivingDay2019"});
        let a = await tourDB.find({});
        assert.equal(a.length, 4);
    });
    it('Guest try to add tour', async function(){
        res1 = await agent.get('/logout');
        res2 = await agent.post('/addTours')
            .send({"Name": "KhoaNguyenTour", "Date": "HappyThanksGivingDay2019"});
        console.log(res2.text);
        let a = await tourDB.find({});
        assert.equal(a.length, 4);
    });
    it('Customer try to add tour', async function(){
        res1 = await agent.post('/login')
            .send({"email": "sylvan2059@live.com", "password": "1wQX_lYt"});
        console.log(res1.text);
        res2 = await agent.post('/addTours')
            .send({"Name": "KhoaNguyenTour", "Date": "HappyThanksGivingDay2019"});
        console.log(res2.text);
        let a = await tourDB.find({});
        assert.equal(a.length, 4);
    });
})
