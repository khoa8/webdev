import React from "react";
import ReactDOM from "react-dom";
import i1 from "../../images/i1.jpg";
import i2 from "../../images/i2.jpg";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "guest", showing: "home"}; // We will have "user" and "admin" roles too.
    }
    // Renders component based on current state and props
    render() {

        let im1 = <img src={i1} width="600" height="400" />;
        let im2 = <img src={i2} width="600" height="400" />;
        return (
            <div>
            <main>
            <div>
            <header>
            <h1>Home</h1>
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
            </div>
            );
    }
}
export default Home;