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
   
    }
    
        handleLogin(role,Info){

        if (role === "admin"){
            this.setState({
                role: "admin",
                user: Info
            }) 
        } else if (role ==="customer"){
            this.setState({
                role: "customer",
                user: Info
            })
        }
    }

    handleLogout(){
        this.setState({
            role: "guest",
            user: null
        })
        
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