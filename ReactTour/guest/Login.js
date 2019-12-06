import React from "react";
import ReactDOM from "react-dom";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", email: "", password: ""}; // We will have "user" and "admin" roles too.
        this.loginHandler = this.loginHandler.bind(this);
    }

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
    
    loginHandler(event){
    this.setState({email: this.element1.value });
    this.setState({password: this.element2.value });
    }

    render() {
        let contents = null;
        switch (this.state.email) {
            case "admin@email.org":
            this.props.handleLogin("admin",{name: "Khoa",Id: "sq9943"});
            break;
            case "cust@email.org":
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
export default Login;