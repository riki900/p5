
let maxBoxes = 4;
let maxCols = 4;
let colors = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CORNER);
  background(0);

  colors = [
    color(226, 201, 177),
    color(185, 117, 80),
    color(116, 96, 76),
    color(162, 125, 91),
    color(223, 172, 125)];

  let y = random(50, 100);
  let w = 100;
  let colRight = 0;
  let upperLeft = createVector(colRight, 0);
  let lowerRight = createVector(colRight + w, y);
  strokeWeight(6);
  for (let i = 0; i < maxCols; i++) {
    for (let j = 0; j < maxBoxes; j++) {
      fill(random(colors));
      rect(upperLeft.x, upperLeft.y, lowerRight.x, lowerRight.y);
      upperLeft.y = lowerRight.y;
      lowerRight.y += random(50, 200);
      lowerRight.y = constrain(lowerRight.y, 0, height);
    }
    print('END COL ' + i);
    w = random(50, 150);
    upperLeft.x = lowerRight.x;
    lowerRight.x += random(80, 150);
    lowerRight.x = constrain(lowerRight.x, 0, width);
    upperLeft.y = 0;
    lowerRight.y = random(50, 120);
  }

}


function draw() {
}
