**Student Name**:  Khoa Nguyen

**NetID**: sq9943

# Homework #11 Solutions

## Question 1 

### (a)
![1a](images/1a.png)

### (b)
![1b](images/1b.png)

## Question 2

### (a)
```code
componentDidMount(){
        fetch('/tours')
        .then((response)=>{
            if (response.ok){
                return response.json();
            } else {
                let info = `Status code: ${response.status}, ${response.statusText}`;
                console.log(response);
                return Promise.reject(info);
            }
        })
        .then((tours)=>{
            this.setState({tours: tours});
            console.log(tours);
        })
        .catch((err)=>{
            console.log("Something bad: " + err);
        })
}
```
### (b)
![2b](images/2b.png)

## Question 3
### (a)

```code
npm install --save-dev mocha
npm install --save-dev chai
npm install --save-dev supertest
npm install --save-dev cookie
```
### (b)

```code
loginClick(){
        fetch('/login', {
            method: 'POST',
            header: {"Content-type": "application/json"},
            body: JSON.stringify({
                email: that.state.email,
                password: that.state.password
            })
        }).then (function(response){
            console.log('Request Status code: ', response.statusText, reponse.status, response.type);
            return response.json();    
        }).then(function(userInfo){
            this.props.login(userInfo.role, userInfo);
            console.log(userInfo);
        })
    }
```

### (c)

![3c](images/3c.png)

## Question 4
### (a)

![4a](images/4a.png)

### (b)

![4b](images/4b.png)

### (c)

```code
addTour(tourId){
    let tour = {Name: this.state.addName, Date: this.state.addDate};
    fetch('/tours/', {
            method: 'POST',
            header: { "Content-type": "application/json"},
            body: JSON.stringify(tour)
        }).then ((response)=>{
            console.log('Request Status code: ', response.statusText, reponse.status, response.type);
            return response.json();
        }).then((tours)=>{
            that.setState({tours: tours});
            console.log(tours);
        });
    }
```

## Question 5
### (a)

![5a](images/5a.png)

```code
//test code

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
```

### (b)


```code
//server code for deleting tour
app.delete('/delete', checkAdminMiddleware, express.json(), async (req, res) => {
    try {
    let del = await tourDB.remove({ _id: req.body._id }, {});
    //console.log(`${JSON.stringify(req.body)}`);
    res.json(del);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
});
```