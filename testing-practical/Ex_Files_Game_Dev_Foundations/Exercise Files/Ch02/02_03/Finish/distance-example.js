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

var object1 = {x:150, y:150, width: 100, height: 100 };
var object2 = {x:10, y:30, width: 25, height: 25 };

// place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

// Loop
setInterval(onTimerTick, 33);

// Render Loop
function onTimerTick() {
    
  // update object2 to mouse
  object2.x = mouseX - (object2.width * .5);
  object2.y = mouseY - (object2.height * .5);
  
  // clear the canvas
  canvas.width = canvas.width;
  
  // calculate the distance
  var distance = distanceTo(object1, object2);
  
  // draw text
  context.fillStyle = "Red";
  context.font="18px sans-serif";
  context.fillText("Distance "+Math.round(distance), 20, 20);
  
  // draw first rectangle
  context.fillStyle = "blue";
  context.fillRect (object1.x,object1.y,object1.width,object1.height);
  
  // draw second rectangle
  context.fillStyle = "green";
  context.fillRect (object2.x,object2.y,object2.width,object2.height);
  
  // line positions
  var o1cX = object1.x + (object1.width * .5);
  var o1cY = object1.y + (object1.height * .5);
  
  var o2cX = object2.x + (object2.width * .5);
  var o2cY = object2.y + (object2.height * .5);
  
  // draw distance line
  if(Math.abs(distance) > 0){
    context.beginPath();
    context.moveTo(o1cX, o1cY);
    context.lineTo(o2cX, o2cY);
    context.stroke();
  }
  
  // draw x distance line
  if(Math.abs(xd) > 0){
    context.setLineDash([5, 10]);
    context.beginPath();
    context.moveTo(o1cX, o1cY);
    context.lineTo(o2cX, o1cY);
    context.stroke();
  }
  
  // draw y distance line
  if(Math.abs(yd) > 0){
    context.setLineDash([5, 10]);
    context.beginPath();
    context.moveTo(o2cX, o1cY);
    context.lineTo(o2cX, o2cY);
    context.stroke();
  }
  
}

// update mouse position
canvas.onmousemove = function(e) {
  mouseX = e.offsetX;
  mouseY = e.offsetY;
}

var xd = 0;
var yd = 0;

// calculate the distance between two objects
function distanceTo( targetA, targetB) {
  
  xd = targetA.x - targetB.x;
  yd = targetA.y - targetB.y;
  
  return Math.sqrt(xd * xd + yd * yd);
}