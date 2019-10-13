import React from "react";
import ReactDOM from "react-dom";
import AdminApp from './AdminApp';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", email: "", password: ""}; // We will have "user" and "admin" roles too.
    }
    


    loginHandler(event){
    this.setState({email: this.element1.value });
    this.setState({password: this.element2.value });
    }

    signIn(){
        if (this.state.email == "admin@gmail.org"){
            this.props.OnSucess("admin",{name: "Khoa",netid: "sq9943"});
        }
        else if(this.state.email == "cust@gmail.org"){
            this.props.OnSucess("customer",{name: "phe",netid: "zz4557"});
        } else{
            this.props.OnSucess("guest",{});
        }
    }

    render() {
        let contents = null;
        switch (this.state.role) {
            case "admin":
                contents = <AdminApp handleLogin = {this.handleLogin} />;
                break;
            case "customer":
                contents = <CustomerApp handleLogin = {this.handleLogin} />;
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
            }ư
        return (
        <div>
            {contents}
        </div>
        );    
    }
}
export default Login;