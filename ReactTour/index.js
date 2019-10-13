import React from "react";
import ReactDOM from "react-dom";
import GuestApp from './GuestApp';
import CustomerApp from './CustomerApp';
import AdminApp from './AdminApp';
import Login from './Login';
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
//         return (
//             <div>
//             <h2>OOOOOOOP </h2>
//             <AdminApp />
//             </div>
// );
        let contents = null;
        switch (this.state.role) {
            case "guest":
                contents = <GuestApp handleLogin = {this.handleLogin} />;
                break;
            case "customer":
                contents = <CustomerApp handleLogout = {this.handleLogout} />;
                break;
            case "admin":
                contents = <AdminApp handleLogout = {this.handleLogout} />;
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