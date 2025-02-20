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

var object1 = {x:130, y:130, width: 100, height: 100 };
var object2 = {x:10, y:30, width: 25, height: 25 };

// place holders for mouse x,y position
var mouseX = 0;
var mouseY = 0;

// loop
setInterval(onTimerTick, 33);

// render loop
function onTimerTick() {
    
    // update object2 to mouse
    object2.x = mouseX - (object2.width * .5);
    object2.y = mouseY - (object2.height * .5);
    
    // clear the canvas
    canvas.width = canvas.width;
    
    // detect a collision
    var collision = contains(object1, object2);
    var color = collision ? "green" : "red";
  
    // draw text
    context.fillStyle = color;
    context.font="18px sans-serif";
    context.fillText("Collision "+collision, 20, 20);
    
    // draw first rectangle
    context.fillStyle = "grey";
    context.fillRect (object1.x,object1.y,object1.width,object1.height);
    
    // draw second rectangl
    context.fillStyle = color;
    context.fillRect (object2.x,object2.y,object2.width,object2.height);
}

// update mouse position
canvas.onmousemove = function(e) {
    mouseX = e.offsetX;
    mouseY = e.offsetY;
}

// test for collision between two boxes
function contains(collisionBounds, target) {
  return (target.x + target.width >= collisionBounds.x &&
          target.x <= collisionBounds.x + collisionBounds.width &&
          target.y + target.height >= collisionBounds.y &&
          target.y <= collisionBounds.y + collisionBounds.height
         );
}