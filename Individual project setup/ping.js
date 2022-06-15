// Canvas Template

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let mouseX, mouseY;

// Draw Function
window.addEventListener("load", draw);

function draw() {
  // DRAWING STUFF HERE
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Vertical Lines
  for (let x = 0; x <= cnv.width; x = x + 50) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, cnv.height);
    ctx.stroke();
  }

  // Draw Horizontal Lines
  for (let y = 0; y <= cnv.height; y = y + 50) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(cnv.width, y);
    ctx.stroke();
  }

  // Draw a grid of circles in the cells
  ctx.fillStyle = "green";
  for (let y = 175; y <= mouseY; y = y + 50) {
    for (let x = 125; x <= mouseX; x = x + 50) {
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  // Request Animation Frame
  requestAnimationFrame(draw);
}

let circlebuttonEl = document.getElementById("circlebutton");

// Add Event Listener
circlebuttonEl.addEventListener("hold", responseOut);

//Event Functions
function responseOut () {
ctx.fillStyle = "red";
ctx.beginPath ();
ctx.arc(150, 150, 100, 0, 2 * Math.PI); 
ctx.fill();
}
 