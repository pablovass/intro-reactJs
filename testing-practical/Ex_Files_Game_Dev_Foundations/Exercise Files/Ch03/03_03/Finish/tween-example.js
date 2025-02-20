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

var box = {x:20, y:30, width: 100, height: 100 };

// place holders for mouse x,y position
var targetX = 100;
var targetY = 100;

var fps = 60;
var spf = 1000/fps;

// loop
setInterval(onTimerTick, spf);

// render Loop
function onTimerTick() {
           
    // clear the canvas
    canvas.width = canvas.width;
    
    UpdatePosition()
  
    context.fillStyle = "blue";
    context.fillRect (box.x - (box.width * .5),box.y- (box.height * .5),box.width,box.height);
    
  context.arc(targetX,targetY,10,0,2*Math.PI);
  context.stroke();
}

// update mouse position
canvas.addEventListener('click', updateMouse, false);

function updateMouse(e){
    targetX = e.offsetX;
    targetY = e.offsetY;
}

/*
T: current Time
B: start Value
C: change in value
D: duration
*/
function linearTween(t, b, c, d) {
    return c*t/d + b;
};

function UpdatePosition(){
    
    var currentTime = 1000/fps;
    var startPos = box.x;
    var changeInPos = targetX - box.x;
    var duration = 500;
  
  box.x = linearTween(currentTime, startPos, changeInPos, duration);
  
  startPos = box.y;
  changeInPos = targetY - box.y;
  box.y = linearTween(currentTime, startPos, changeInPos, duration);
  
}