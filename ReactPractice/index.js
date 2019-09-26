import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";

// What is this? HTML mixed with JavaScript

let contents = <section>
		<h1>The Periodic Table</h1>
		<h2>Brought to you by Khoa Nguyen sq9943</h2>
		<p>There are {parseInt(chemElements.length)} chemical elements.</p>
		</section>;

ReactDOM.render(contents,
    document.getElementById("root")
);