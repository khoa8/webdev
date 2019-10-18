import React from "react";
import ReactDOM from "react-dom";
import i1 from "../../images/i1.jpg";
import i2 from "../../images/i2.jpg";
class CustomerApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "customer", showing: "home"}; // We will have "user" and "admin" roles too.
        this.tourHandler = this.tourHandler.bind(this);
    }
    tourHandler(event){
    this.setState({showing: "tour"});
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
            case "tour":
                contents = <h2>Coming Tour: Not Implement Yet!</h2>;
                break;
            default:
                contents = <h2>WWarning! Something was wrong, again!</h2>;
        }
        return (
        	<div>
        	<nav id="bar">
    		<span id="s1">KN Vietnam Travel</span>
      		<ul>
        	<li><a href="#" onClick={this.tourHandler.bind(this)}>Coming Tours</a></li>
        	<li><a href="#">My Tour</a></li>
        	<li><a href="#">About Us</a></li>
            <li><a href="#" onClick={this.props.handleLogout}>Logout</a></li>
     		</ul>
     		</nav>
            {contents}
        	</div>
        	);
    }
}
export default CustomerApp;