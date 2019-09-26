import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";
import PeriodicTable from "./periodic.js";

let cols = ["atomic_number", "name", "symbol", "phase", "year_of_discovery"];
let content = <div>
    <h1>The Periodic Table </h1>
    <h2> Brought to you by Your Name and YourNetId here</h2>
    <PeriodicTable chemElements={chemElements} desiredCols={cols}/>
    </div>;

ReactDOM.render(content, document.getElementById("root"));

