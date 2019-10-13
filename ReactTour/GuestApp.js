import React from "react";
import ReactDOM from "react-dom";
import Home from './Home';
import About from './About';
import Login from './Login';
import Tour from './Tour.js';
import tours from "./tours.json";
class GuestApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", showing: "home"}; // We will have "user" and "admin" roles too.
        this.homeHandler = this.homeHandler.bind(this);
        this.aboutHandler = this.aboutHandler.bind(this);
        this.loginHandler = this.loginHandler.bind(this);
        this.tourHandler = this.tourHandler.bind(this);
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

    tourHandler(event){
    this.setState({showing: "tour"});
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
                contents = <Login handleLogin = {this.props.handleLogin}/>;
                break;
            case "tour":
                let cols = ["Name", "Date"];
                contents = 
                (
                    <main>
                    <div>
                    <h1>Current Tour</h1>
                    <Tour tours={tours} desiredCols={cols}/>
                    </div>
                    </main>
                );

                break;
            default:
                contents = <h2>WWarning! Something was wrong, again!</h2>;
        }

        return (
        <div>
        <nav id="bar">
            <span id="s1">KN Vietnam Travel</span>
            <ul>
            <li><a href="#" onClick={this.tourHandler.bind(this)}>Current Tours</a></li>
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