import React from "react";


function Tour(props) {
let cols = props.desiredCols;
let cElements = props.tours;

let headTDs = cols.map(function(cName, i){
    return <td key={"col"+i}>{cName}</td>
});
let headRow = <tr>{headTDs}</tr>;

let bRows = cElements.map(function(element, i) {
let rTDs = [];
for(let col of cols) {
    rTDs.push(<td key={"col_"+col}>{element[col]}</td>);
}
return <tr key={"elem"+i}>{rTDs}</tr>;
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

export default Tour;
