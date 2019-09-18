function drawing(){
  var x = 0;
  var y = 0;
  var size = 0;
  var fill = '000000';  
  var temp = '';
  var svg = '';
  for( var i = 0 ; i < 70 ; i++ ){
      x = Math.floor(Math.random() * (1400-100+1)+ 100);
      y = Math.floor(Math.random() * (1400-100+1)+ 100);
      size = Math.floor(Math.random() * (70-10+1)+ 10);
      fill = Math.floor(Math.random()*16777215).toString(16); 
      text = "<circle cx='"+ x +"' cy='" + y + "' r='" + size + "' fill='#" + fill + "'/>";
      //text = "<circle cx='50' cy='50' r='50' fill='red'/>";
      temp = temp  +  text;       
  }
  //svg ="<svg id='svg' height='500' width='700'>" + temp + "</svg>";
  document.getElementById("MyDrawing").innerHTML += temp;
}
window.onload = drawing;