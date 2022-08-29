

let xstart;
let xnoise;
let ystart;
let ynoise;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // let myCanvas = createCanvas(800, 800);
  // myCanvas.position(200, 0);
  background(255);
  //colorMode(HSB, 360, 100, 100);
  angleMode(DEGREES);

  frameRate(24);

  xstart = random(10);
  ystart = random(10);

}
function draw() {

  background(0);

  xstart = random(10);
  ystart = random(10);

  xnoise = xstart;
  ynoise = ystart;

  drawMatrix();

}

function drawMatrix() {
  let step = 10;

  for (let y = 0; y <= height; y += step) {
    ynoise += 0.1;
    xnoise = xstart;
    for (let x = 0; x <= width; x += step) {
      xnoise += 0.1;
      drawPoint(x, y, noise(xnoise, ynoise), step);
    }
  }
}



// function drawPoint(x, y, noiseFactor, step) {
//   let len = noiseFactor * (step * 2);
//   rect(x, y, len, len);
// }

// function drawPoint(x, y, noiseFactor, step) {
//   let leftColor = color(0, 255, 0);
//   let rightColor = color(0, 0, 255);
//   let lerpBy = x / width;
//   let currColor = lerpColor(leftColor, rightColor, lerpBy);

//   let len = step * random(4, 10);
//   push();
//   translate(x, y);
//   rotate(noiseFactor * 360);
//   // strokeWeight(step * 1.5);
//   // stroke(random(255), random(255), random(255), 255);
//   stroke(currColor);
//   line(0, 0, len, 0);
//   pop();
// }

function drawPoint(x, y, noiseFactor, step) {
  // let leftColor = color(0, 255, 0);
  // let rightColor = color(0, 0, 255);
  // let lerpBy = x / width;
  // let currColor = lerpColor(leftColor, rightColor, lerpBy);

  let len = step * random(4, 10);
  push();
  translate(x, y);
  rotate(noiseFactor * 540);
  let edgeSize = noiseFactor * 35;
  let grey = 150 + noiseFactor * 120;
  let alpha = 150 + noiseFactor * 120;
  // strokeWeight(step * 1.5);
  // stroke(random(255), random(255), random(255), 255);
  fill(grey, alpha);
  noStroke();
  ellipse(0, 0, edgeSize, edgeSize / 2);
  pop();
}

