let displayAltColor = false;

function setup() {
  createCanvas(400, 400);
  background(128);
}

function draw() {

  rectMode(CENTER);

  if (mouseX > 200 - 100 && mouseX < 200 + 100 &&
    mouseY > 200 - 100 && mouseY < 200 + 100) {
    background(255, 0, 0);
  } else {
    background(0, 0, 255);
  }
  if (mouseIsPressed) {
    background(0, 250, 0);
  }
  if (displayAltColor) {
    fill(0);
  } else {
    fill(128);
  }
  rect(200, 200, 100);
}

function mousePressed() {
  displayAltColor = !displayAltColor;
}
