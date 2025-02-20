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

// health bar dimensions
var healthBar = {
    x: 20,
    y: 30,
    width: 300,
    height: 20
};

// loop
setInterval(onTimerTick, 33);

// render Loop
function onTimerTick() {

    // clear the canvas
    canvas.width = canvas.width;

    // draw text
    context.fillStyle = "Red";
    context.font = "18px sans-serif";
    context.fillText("Life " +health+"/"+maxHealth+" (" + ratio + " = " +percent +"%)", 20, 20);

    // draw background
    context.fillStyle = "black";
    context.fillRect(healthBar.x, healthBar.y, healthBar.width, healthBar.height);

    // draw fill
    context.fillStyle = "red";
    context.fillRect(healthBar.x, healthBar.y, fillWidth, healthBar.height);
}

var maxHealth = 10;
var health = maxHealth;
var ratio = 0;
var percent = 0;
var fillWidth = healthBar.width;