import React from "react";
import ReactDOM from "react-dom";

class Tour extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {modify: false};
    }

render() {
    let mod = this.props.modifyTour;
    let cols = this.props.desiredCols;
    let headRow = null;
	let cElements = this.props.tours;
	let headTDs = cols.map(function(cName, i){
		return <td key={"col"+i}>{cName}</td>
	});
	if (mod) {
        headRow = <tr><td key={"col"}></td>{headTDs}</tr>;
    }
        else headRow = <tr>{headTDs}</tr>;
	let firstCol = <button type="submit" value="Submit">Delete</button>
	let bRows = cElements.map(function(element, i) {
	let rTDs = [];
	if (mod) rTDs.push(<td key={"col"}>{firstCol}</td>);
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
