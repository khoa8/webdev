import React from "react";
import ReactDOM from "react-dom";
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "admin", showing: "home"}; // We will have "user" and "admin" roles too.
    }
    customerHandler(event){
    this.setState({showing: "customer"});
    }
    render() {

    	let im1 = <img src={i1} width="600" height="400" />;
    	let im2 = <img src={i2} width="600" height="400"  />;
        let contents = null;
        switch (this.state.showing) {
            case "home":
                contents = (
            <main>
            <div>
            <header>
            <h1>Khoa Nguyen Vietnam Travel</h1>
            </header>
            {im1}
            <p>Traveling to <strong>Vietnam</strong> is always a great choice. The coastline is longer than 3260km, 
            great nature reserves, bustling cities, epic historical places, unique and fascinating culture, 
            and a long list of the best oriental food. Vietnam has all that.</p> 
            <p>With a suitable schedule, departing on time as committed, <strong>Khoa Nguyen Travel</strong> is currently the most 
            prestigious travel company in Vietnam. We always ready to serve travelers anytime, anywhere. We always strive to improve 
            the quality of our services every day, and do our best to be the perfect company for customers's choice.</p>
            {im2}
            </div>
            </main>
            );
                break;
            case "customer":
                contents = <h2>Manage Customers: Not Implement Yet!</h2>;
                break;
            default:
                contents = <h2>WWarning! Something was wrong, again!</h2>;
        }
        return (
        	<div>
        	<nav id="bar">
    		<span id="s1">KN Vietnam Travel</span>
      		<ul>
        	<li><a href="#">Manage Tours</a></li>
        	<li><a href="#" onClick={this.customerHandler.bind(this)}>Manage Customers</a></li>
        	<li><a href="#">Home</a></li>
        	<li><a href="#">Logout</a></li>
     		</ul>
     		</nav>
     		{contents}
        	</div>
        	);
    }
}
export default AdminApp;