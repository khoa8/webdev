import commonmark from "commonmark";

function convert(){

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var parsed = reader.parse(document.getElementById("input").value);
var result = writer.render(parsed);

document.getElementById("d2").innerHTML +=result;
}

window.onload = function() {
  document.getElementById("b1").addEventListener("click",convert);
}