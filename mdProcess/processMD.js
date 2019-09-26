import commonmark from "commonmark";
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

function convert(){

var reader = new commonmark.Parser();
var writer = new commonmark.HtmlRenderer();
var parsed = reader.parse(document.getElementById("input").value);
var result = writer.render(parsed);
document.getElementById("d2").innerHTML +=result;
document.querySelectorAll('div').forEach((block) => {
    hljs.highlightBlock(block);
  });
}

window.onload = function() {
  document.getElementById("b1").addEventListener("click",convert);
}