import React from "react";
import ReactDOM from "react-dom";
import i2 from "../../images/i2.jpg";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", showing: "about"}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {

         let im2 = <img src={i2} width="600" height="400" />;
         return (
            <div>
            <main>
            <div>
            <header>
            <h1>About Us</h1>
            </header>
            <p><strong>We are a travel agent that make tours to Vietnam</strong></p> 
            {im2}
            </div>
            </main>
            </div>
            );
    }
}
export default About;