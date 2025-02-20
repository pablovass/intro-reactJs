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

// setup some basic boxes to use for our example
var redBox = {x:0, y:0, width: 25, height: 25, color: "red" };
var blueBox = {x:0, y:0, width: 25, height: 25, color: "blue" };

// draws a box to the canvas
function drawBox(x, y, box){
    context.fillStyle = box.color;
    context.fillRect (x, y, box.width, box.height);
}

var box = redBox;
var padding = 5;
var startX = 5;
var startY = 5;

// TODO align boxes
for ( var i = 0; i < 5; i ++ ){
  var x = startX + (box.width + padding) * i;
  var y = startY;

  drawBox(x, y, box);
}

box = blueBox;

for ( var i = 1; i < 5; i ++ ){
  var y = startY + (box.height + padding) * i;
  var x = startX;

  drawBox(x, y, box);
}
