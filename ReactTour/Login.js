import React from "react";
import ReactDOM from "react-dom";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: "", password: ""}; // We will have "user" and "admin" roles too.
    }
    


    loginHandler(event){
    this.setState({email: this.element1.value });
    this.setState({password: this.element2.value });
    }

    render() {
        
        return (
        <div>
            <main>
            <div>
            <header>
            <h1>Login Site</h1>
            </header>
            <form>
            <label>Email:</label><input ref={el1 => this.element1 = el1} type="text" /><br /><br />
            <label>Password:</label><input ref={el2 => this.element2 = el2} type="password" /><br /><br />
            <input onClick={this.loginHandler.bind(this)} type="button" value="Login" />
            </form>
            </div>
            </main>
        </div>
        );    
    }
}
export default Login;