// create a canvas to work with
var canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// style canvas
canvas.id     = "canvas";
canvas.width  = 400;
canvas.height = 400;
canvas.setAttribute("style", "border: 1px solid black;");

// get 2D context
var context = canvas.getContext('2d');

// setup a basic box to use for our example
var box = {
    width: 25,
    height: 25,
    color: "red"
};

// draws a box to the canvas
function drawBox(x, y, box){
    context.fillStyle = box.color;
    context.fillRect (x, y, box.width, box.height);
}

var columns = 10
var rows = 10
var total = columns * rows

for (var i = 0; i < total; i++){
  
  var x = 0;
  var y = 0;
  
  drawBox(x, y, box);
  
}
