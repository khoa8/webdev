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

```code
logout() {
    fetch('/logout').then((response)=>{
        console.log('Request status code:', response.statusText, response.status, response.type);
        this.props.login("guest",null);
    }).catch((response=>{
        this.props.login("guest",null);
    });
}
```

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

### (b)


```code
delTour(tourId) {
fetch(`/tours/${tourId}`, {
    method:'DELETE',
}).then((response)=>{
    console.log('Request status code:', response.statusText, response.status, response.type);
    return fetch('/tours');
}).then((response)=>{
    if(response.ok) {
        return response.json();
    } else {
        let info =`Status code: ${response.status}, ${response.statusText}`;
        console.log(response);
        return Promise.reject(info);
    }}).then((tours)=>{
        this.setState({tours: tours});
        console.log(tours);
    }).catch((err)=>{
        console.log("Something bad: " + err);
    })
}
```