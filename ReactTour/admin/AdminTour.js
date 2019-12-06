import React from "react";
import ReactDOM from "react-dom";
import Tour from "../guest/Tour";
import tours from "../guest/tours.json"; 
class AdminTour extends React.Component {
    constructor(props) {
        super(props);
        this.state = {role: "admin", showing: "tour", add: false, modifyTour: true, addName: "", addDate: "", ctours: tours};
        this.addHandler = this.addHandler.bind(this);
        this.addtour = this.addtour.bind(this);
        this.delHandler = this.delHandler.bind(this);
        this.deltour = this.deltour.bind(this);
    }

    addTour(tourId){
    let tour = {Name: this.state.addName, Date: this.state.addDate};
    fetch('/tours/', {
            method: 'POST',
            header: { "Content-type": "application/json"},
            body: JSON.stringify(tour)
        }).then ((response)=>{
            console.log('Request Status code: ', response.statusText, reponse.status, response.type);
            return response.json();
        }).then((tours)=>{
            that.setState({tours: tours});
            console.log(tours);
        });
    }

    addHandler(event){
        this.setState({add: !this.state.add});
        }
    addtour(event){
        this.setState({addName: this.element1.value });
        this.setState({addDate: this.element2.value });
        this.setState({ctours: this.state.ctours.concat({"Tour#" : this.state.ctours.length + 1,"Name" : this.element1.value, "Date" : this.element2.value})});
        }

    delHandler(event){
        this.setState({del: !this.state.del});
        } 
    deltour(event) { 
        let val = this.element3.value;
        this.setState({ctours: this.state.ctours.filter(function(value){
                            return value["Tour#"] !== val;
                            })
                            });
        }

    render() {

        let contents = null;
        let cols = ["Tour#", "Name", "Date"];
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
                    <input onClick={this.addtour.bind(this)} type="button" value="ADD" /><br />
                    </fieldset>
                    </form>
                    }
                    <br /><br /><br /><br />
                    <input onClick={this.delHandler.bind(this)} type="button" value="DEL Tour !!!" />
                    {this.state.del &&
                    <form>
                    <fieldset>
                    <legend>Choose the tour to delete</legend>
                    <label>Tour #:</label><input ref={el3 => this.element3 = el3} type="text" size="10" />
                    <input onClick={this.deltour.bind(this)} type="button" value="DELETE !!" /><br />
                    </fieldset>
                    </form>
                    }
                    <h2>Current Tour</h2>
                    <Tour tours={this.state.ctours} desiredCols={cols} modifyTour={this.state.modifyTour} />
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