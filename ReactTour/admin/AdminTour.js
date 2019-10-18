import React from "react";
import ReactDOM from "react-dom";
import Tour from "../guest/Tour";
import tours from "../guest/tours.json"; 
class AdminTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "admin", showing: "tour", add: false, modifyTour: true, addName: "", addDate: ""};
        this.addHandler = this.addHandler.bind(this);
        this.adding = this.adding.bind(this);
    }

    addHandler(event){
        this.setState({add: !this.state.add});
        }
    adding(event){
        this.setState({addName: this.element1.value });
        this.setState({addDate: this.element2.value });
        let anchors = {"Name" : this.element1.value, "Date" : this.element2.value};
        fs = require("fs");
        fs.writeFile("../guest/tours.json", JSON.stringify(anchors, null, 4));
        }

    render() {

        let contents = null;
        let cols = ["Name", "Date"];
        contents = (
                    <main>
                    <header>
                    <h1>Tour Management</h1>
                    </header>
                    <div>
                    <input onClick={this.addHandler.bind(this)} type="button" value="Add Tour" />
                    {this.state.add &&
                    <form>
                    <fieldset>
                    <legend>Fill out the info below</legend>
                    <label>Name:</label><input ref={el1 => this.element1 = el1} type="text" size="50" /><br /><br />
                    <label>Date:</label><input ref={el2 => this.element2 = el2} type="text" size="50" /><br /><br />
                    <input onClick={this.adding.bind(this)} type="button" value="ADD" /><br />
                    </fieldset>
                    </form>
                    }
                    <h2>Current Tour</h2>
                    <Tour tours={tours} desiredCols={cols} modifyTour={this.state.modifyTour} />
                    </div>
                    </main>
                );

        return (
        	<div>
     		{contents}
        	</div>
        	);
    }
}
export default AdminTour;