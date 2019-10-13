**Student Name**:  Khoa Nguyen

**NetID**: sq9943

# Homework #5 Solutions

## Question 1 
### (a)

### (b)

![1b](images/1b.png)

### (c)

![1c1](images/1c1.png)

![1c2](images/1c2.png)

![1c3](images/1c3.png)

### (d)
```javascript
import React from "react";
import ReactDOM from "react-dom";
import GuestApp from './GuestApp';
import CustomerApp from './CustomerApp';
import AdminApp from './AdminApp';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest"}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {
//         return (
//             <div>
//             <h2>OOOOOOOP </h2>
//             <AdminApp />
//             </div>
// );
        let contents = null;
        switch (this.state.role) {
            case "guest":
                contents = <GuestApp />;
                break;
            case "customer":
                contents = <CustomerApp />;
                break;
            case "admin":
                contents = <AdminApp />;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
            }
        return (
        <div>
        {contents}
        </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));
```
## Question 2
### (a)

### (b)

![2b1](images/2b1.png)

![2b2](images/2b2.png)

![2b3](images/2b3.png)

```javascript
import React from "react";
import ReactDOM from "react-dom";
import Home from './Home';
import About from './About';
class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", showing: "home"}; // We will have "user" and "admin" roles too.
    }
    
    homeHandler(event){
    this.setState({showing: "home"});
    }

    aboutHandler(event){
    this.setState({showing: "about"});
    }

    loginHandler(event){
    this.setState({showing: "login"});
    }

    render() {
        let contents = null;
        switch (this.state.showing) {
            case "home":
                contents = <Home />;
                break;
            case "about":
                contents = <About />;
                break;
            case "login":
                contents = <h2>Login: Not Implement Yet!</h2>;
                break;
            default:
                contents = <h2>WWarning! Something was wrong, again!</h2>;
        }

        return (
        <div>
        <nav id="bar">
            <span id="s1">KN Vietnam Travel</span>
            <ul>
            <li><a href="#">Current Tours</a></li>
            <li><a href="#" onClick={this.loginHandler.bind(this)}>Customer Login</a></li>
            <li><a href="#" onClick={this.homeHandler.bind(this)}>Home</a></li>
            <li><a href="#" onClick={this.aboutHandler.bind(this)}>About Us</a></li>
            </ul>
            </nav>
        {contents}
        </div>
        );    
	}
}
export default GuestApp;
```

## Question 3
### (a)

![3a](images/3a.png)

### (b)

![3b](images/3b.png)

## Question 4
### (a)

![4a](images/4a.png)

### (b)

#### Code added in App
```javascript
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest"}; // We will have "user" and "admin" roles too.
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }
    

    handleLogin(role,info){

        if (role === "admin"){
            this.setState({role: "admin",user: info}) 
        } 
        else if (role ==="customer"){
            this.setState({role: "customer",user: info})
        }
    }

    handleLogout(){
        this.setState({role: "guest",user: null})
        
    }
    
    render() {

        let contents = null;
        switch (this.state.role) {
            case "guest":
                contents = <GuestApp handleLogin = {this.handleLogin} />;
                break;
            case "customer":
                contents = <CustomerApp handleLogout = {this.handleLogout} />;
                break;
            case "admin":
                contents = <AdminApp handleLogout = {this.handleLogout}/>;
                break;
            default:
                contents = <h2>Warning something went wrong!!!</h2>;
            }
        return (
        <div>
        {contents}
        </div>
        );
    }
}
```

#### Code added in Login
```javascript
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", email: "", password: ""}; // We will have "user" and "admin" roles too.
        this.loginHandler = this.loginHandler.bind(this);
    }
    
    loginHandler(event){
    this.setState({email: this.element1.value });
    this.setState({password: this.element2.value });
    }

    render() {
        let contents = null;
        switch (this.state.email) {
            case "admin@gmail.org":
            this.props.handleLogin("admin",{name: "Khoa",Id: "sq9943"});
            break;
            case "customer":
            this.props.handleLogin("customer",{name: "Khoa",Id: "sq9943"});
            break;
            default:
                contents = (
            <main>
            <header>
            <h1>Login Site</h1>
            </header>
            <form>
            <label>Email:</label><input ref={el1 => this.element1 = el1} type="text" /><br /><br />
            <label>Password:</label><input ref={el2 => this.element2 = el2} type="password" /><br /><br />
            <input onClick={this.loginHandler.bind(this)} type="button" value="Login" />
            </form>
            </main>
                    );
            }
        return (
        <div>
            {contents}
        </div>
        );    
    }
}
```

### (c)

```javascript
<li><a href="#" onClick={this.props.handleLogout}>Logout</a></li>
```

## Question 5
### (a) 

```json
tours = [{
  "Name": "Ho Chi Minh City",
  "Date": "December 10th",
  },{
  "Name": "Da Nang",
  "Date": "December 20th",
  },{
  "Name": "Ha Noi",
  "Date": "October 30th",
  },{
  "Name": "Ho Chi Minh City",
  "Date": "November 10th",
}]

```
### (b)

![5b](images/5b.png)

### Notice: I reuse professor's code from the hw4 solution to create a table in Tour.js. The code is below 

```javascript
import React from "react";


function Tour(props) {
let cols = props.desiredCols;
let cElements = props.tours;

let headTDs = cols.map(function(cName, i){
    return <td key={"col"+i}>{cName}</td>
});
let headRow = <tr>{headTDs}</tr>;

let bRows = cElements.map(function(element, i) {
let rTDs = [];
for(let col of cols) {
    rTDs.push(<td key={"col_"+col}>{element[col]}</td>);
}
return <tr key={"elem"+i}>{rTDs}</tr>;
})

return <div>
    <table id="tb">
    <tbody>
        {headRow}
        {bRows}
    </tbody>
    </table>
    </div>;
}

export default Tour;
```

### (c)

[Link to HW5](http://csweb01.csueastbay.edu/~sq9943/hw5/index.html)