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