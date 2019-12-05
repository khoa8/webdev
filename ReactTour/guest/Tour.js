import React from "react";
import ReactDOM from "react-dom";

class Tour extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {modify: false};
    }

componentDidMount(){
        fetch('/tours')
        .then((response)=>{
            if (response.ok){
                return response.json();
            } else {
                let info = `Status code: ${response.status}, ${response.statusText}`;
                console.log(response);
                return Promise.reject(info);
            }
        })
        .then((tours)=>{
            this.setState({tours: tours});
            console.log(tours);
        })
        .catch((err)=>{
            console.log("Something bad: " + err);
        })
}

render() {
    //let mod = this.props.modifyTour;
    let cols = this.props.desiredCols;
    //let headRow = null;
	let cElements = this.props.tours;
	let headTDs = cols.map(function(cName, i){
		return <td key={"col"+i}>{cName}</td>
	});
	// if (mod) {
    //     headRow = <tr><td key={"col"}></td>{headTDs}</tr>;
    // }
    //     else headRow = <tr>{headTDs}</tr>;
    let headRow = <tr>{headTDs}</tr>;
	//let firstCol = <button type="submit" value="Submit">Delete</button>;
	let bRows = cElements.map(function(element, i) {
	let rTDs = [];
	//if (mod) rTDs.push(<td key={"col"}>{firstCol}</td>);
	for(let col of cols) {
		
		rTDs.push(<td key={"col_"+col}>{element[col]}</td>);
	}
	return (
			<tr key={"elem"+i}>{rTDs}</tr>);
	})

return <div>
    <table id="tb">
    <tbody>
        {headRow}
        {bRows}
    </tbody>
    </table>
    </div>;
}
}
export default Tour;
