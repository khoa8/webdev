const rp = require('request-promise-native');
const cookieJar = rp.jar();
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


let tourSite = {
    uri: 'http://127.43.43.8:1111/tours',
    json: true,
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
    body: {"email": "sylvan205@live.com",
    "password": "1wQX_lYt"},
    jar: cookieJar
};

let guest = {
    uri: 'http://127.43.43.8:1111/login',
    json: true,
    method: "POST",
    body: {"email": "sylvan2059@live.com",
    "password": "2wQX_lYt"},
    jar: cookieJar
};


async function someTests() {
    let res1, res2, res3;
    try {
        console.log(`TEST 1:\n`);
        res1 = await rp(adminlogin);
        console.log(`Admin login test result: ${JSON.stringify(res2)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(adminlogin.uri)}`);
        res3 = await rp(logout);
        console.log(`Logout result: ${JSON.stringify(res3)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(logout.uri)}`);
    } catch (error) {
    console.log(`Good login error: ${error}\n`);
    }
    try {
        console.log(`TEST 2:\n`);
        res1 = await rp(tourSite);
        console.log(`cookies: ${cookieJar.getCookieString(tourSite.uri)}`);
        res2 = await rp(loginBadEmail);
        console.log(`Bad email login test result: ${JSON.stringify(res2)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(loginBadEmail.uri)}`);
    } catch (error) {
    console.log(`Bad email login error: ${error}`);
    }
    try {
        console.log(`TEST 3:\n`);
        res1 = await rp(tourSite);
        console.log(`cookies: ${cookieJar.getCookieString(tourSite.uri)}`);
        res2 = await rp(loginBadPass);
        console.log(`Bad password login test result: ${JSON.stringify(res2)}\n`);
        console.log(`cookies: ${cookieJar.getCookieString(loginBadPass.uri)}`);
    } catch (error) {
    console.log(`Bad password login error: ${error}\n`);
    }
}

someTests();