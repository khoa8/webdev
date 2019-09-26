import React from "react";
import ReactDOM from "react-dom";
import chemElements from "./elements.json";

// What is this? HTML mixed with JavaScript
let head1 = <h1>The Periodic Table</h1>;
let head2 = <h2>Brought to you by Khoa Nguyen sq9943</h2>;
let intro = <p>There are {parseInt(chemElements.length)} chemical elements.</p>;

ReactDOM.render(<section>
    {head1}
    {head2}
    {intro}
    </section>,
    document.getElementById("root")
);
