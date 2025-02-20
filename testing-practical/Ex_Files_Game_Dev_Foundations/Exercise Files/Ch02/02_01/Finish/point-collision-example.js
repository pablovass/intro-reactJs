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

var box = {x:10, y:30, width: 100, height: 100 };

// place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

// loop
setInterval(onTimerTick, 33);

// render loop
function onTimerTick() {
    // clear the canvas
    canvas.width = canvas.width;
    
    // see if a collision happened
    var collision = contains(box, mouseX, mouseY);
    
    // render out text
    var color = collision ? "green" : "red"
    context.fillStyle = color;
    context.font="18px sans-serif";
    context.fillText("Collision "+collision +" Mouse ("+mouseX+","+mouseY+")", 10, 20);
    
    // render out square    
    context.fillStyle = color;
    context.fillRect (box.x,box.y,box.width,box.height);
}

// update mouse position
canvas.onmousemove = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

// test for collision between an object and a point
function contains(target, x, y) {
  return (x >= target.x &&
          x <= target.x + target.width &&
          y >= target.y &&
          y <= target.y + target.height
         );
}