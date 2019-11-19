const rp = require('request-promise-native');
const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/toursDB');
const cookieJar = rp.jar();

let tourSite = {
    uri: 'http://127.43.43.8:1111/tours',
    json: true,
    jar: cookieJar
};

let add = {
    uri: 'http://127.43.43.8:1111/addTours',
    json: true,
    method: "POST",
    body: {"Name": "NewTour",
    "Date": "NewDate"},
    jar: cookieJar
};

let logout = { 
    uri: 'http://127.43.43.8:1111/logout', 
    json: true,
    jar: cookieJar
}; 

let adminlogin = {
    uri: 'http://127.43.43.8:1111/login',
    json: true,
    method: "POST",
    body: {"email": "sided1830@outlook.com",
    "password": "C}m8\"L,F"},
    jar: cookieJar
};

let custlogin = {
    uri: 'http://127.43.43.8:1111/login',
    json: true,
    method: "POST",
    body: {"email": "sylvan2059@live.com",
    "password": "1wQX_lYt"},
    jar: cookieJar
};


async function someTests() {
    let res1, res2, res3, res4, res5;
    try {
        console.log(`TEST 1:\n`);
        res1 = await rp(adminlogin);
        console.log(`Admin login test result: ${JSON.stringify(res1)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(adminlogin.uri)}\n`);
        res2 = await db.find({});
        console.log(`Number of tours: ${res2.length} tours\n`);
        let ps = [rp(add),db.find({})];
        [res3, res4] = await Promise.all(ps);
        console.log(`After adding, number of tours: ${res3.length} tours\n`);
        res5 = await rp(logout);
        console.log(`Logout result: ${JSON.stringify(res5)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(logout.uri)}\n`);
    } catch (error) {
    console.log(`Admin login error: ${error}\n`);
    }
    try {
        console.log(`TEST 2:\n`);
        res1 = await rp(custlogin);
        console.log(`Customer login test result: ${JSON.stringify(res1)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(custlogin.uri)}\n`);
        let ps = [rp(tourSite),db.find({})];
        [res2,res5] = await Promise.all(ps);
        console.log(`Number of tours: ${res2.length} tours\n`);
        res3 = await rp(add);
        res4 = await rp(logout);
        console.log(`Logout result: ${JSON.stringify(res4)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(logout.uri)}\n`);
    } catch (error) {
    console.log(`Customer add tour error: ${error}`);
    }
    try {
        console.log(`TEST 3:\n`);
        let ps = [rp(tourSite),db.find({})];
        [res1,res2] = await Promise.all(ps);
        console.log(`cookies: ${cookieJar.getCookieString(tourSite.uri)}\n`);
        console.log(`Number of tours: ${res1.length} tours\n`);
        res3 = await rp(add);
    } catch (error) {
    console.log(`Guest add tour error: ${error}\n`);
    }
}

someTests();