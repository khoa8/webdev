import React from "react";
import ReactDOM from "react-dom";
import i1 from "../../images/i1.jpg";
import i2 from "../../images/i2.jpg";
import AdminTour from "./AdminTour";
class AdminApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "admin", showing: "home"}; // We will have "user" and "admin" roles too.
        this.mnacustomerHandler = this.mnacustomerHandler.bind(this);
        //this.logoutHandler = this.logoutHandler.bind(this);
        this.homeHandler = this.homeHandler.bind(this);
        this.tourHandler = this.tourHandler.bind(this);
    }

logout() {
    fetch('/logout').then((response)=>{
        console.log('Request status code:', response.statusText, response.status, response.type);
        this.props.login("guest",null);
    }).catch((response=>{
        this.props.login("guest",null);
    });
}

    mnacustomerHandler(event){
    this.setState({showing: "mnacustomer"});
    }

    homeHandler(event){
    this.setState({showing: "home"});
    }

    tourHandler(event){
        this.setState({showing: "mnatour"});
    }

    // logoutHandler(event){
    // this.handleLogout;
    // }

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
            case "mnacustomer":
                contents = <h2>Manage Customers: Not Implement Yet!</h2>;
                break;
            case "mnatour":
                contents = <AdminTour />;
                break;
            default:
                contents = <h2>WWarning! Something was wrong, again!</h2>;
        }
        return (
        	<div>
        	<nav id="bar">
    		<span id="s1">KN Vietnam Travel</span>
      		<ul>
        	<li><a href="#" onClick={this.tourHandler.bind(this)}>Manage Tours</a></li>
        	<li><a href="#" onClick={this.mnacustomerHandler.bind(this)}>Manage Customers</a></li>
        	<li><a href="#" onClick={this.homeHandler.bind(this)}>Home</a></li>
        	<li><a href="#" onClick={this.props.handleLogout}>Logout</a></li>
     		</ul>
     		</nav>
     		{contents}
        	</div>
        	);
    }
}
export default AdminApp;