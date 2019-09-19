
function draw_cir(){
  let n1 = document.getElementById("drawcir").value;
  let opa = document.getElementById("opac").value;
  var x = 0;
  var y = 0;
  var size = 0;
  var fill = '000000';  
  var temp = '';
  var svg = '';
  for( let i = 0 ; i < n1; i++ ){
      x = Math.floor(Math.random() * (645-100+1)+ 100);
      y = Math.floor(Math.random() * (300-100+1)+ 100);
      size = Math.floor(Math.random() * (40-10+1)+ 10);
      fill = Math.floor(Math.random()*16777215).toString(16); 
      text = "<circle cx='"+ x +"' cy='" + y + "' r='" + size + "' fill='#" + fill + "' fill-opacity='" + opa + "'/>";
      //text = "<circle cx='50' cy='50' r='50' fill='red'/>";
      temp = temp  +  text;       
  }
  //svg ="<svg id='svg' height='500' width='700'>" + temp + "</svg>";
  document.getElementById("MyDrawing").innerHTML += temp;
}

function draw_squ(){
  let n2 = document.getElementById("drawsqu").value;
  let opa = document.getElementById("opac").value;
  var maxSize = 50,
      maxX = 645,
      maxY = 300;
  for( let i = 0; i < n2; i++) {
  let x = Math.random()*(maxX - maxSize);
  let y = Math.random()*(maxY - maxSize);
  let width = Math.random()*maxSize;
  let square = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  square.setAttribute("x", x);
  square.setAttribute("y", y);
  square.setAttribute("width", width);
  square.setAttribute("height", width);
  let colorStr = `rgb(${255*Math.random()}, ${255*Math.random()}, ${255*Math.random()})`;
  square.setAttribute("fill", colorStr);
  square.setAttribute("fill-opacity", opa);
  document.getElementById("MyDrawing").appendChild(square);
  }
}

function clear(){
const myElement = document.getElementById("MyDrawing");
while(myElement.firstChild){myElement.removeChild(myElement.firstChild);}
}

window.onload = function() {
  document.getElementById("b1").addEventListener("click",draw_cir);
  document.getElementById("b2").addEventListener("click",draw_squ);
  document.getElementById("b3").addEventListener("click",clear);
}




