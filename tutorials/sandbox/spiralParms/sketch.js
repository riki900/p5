let centerX, centerY;
let radiusDeltaSlider, radiusDeltaValue;
let rotationDeltaSlider, rotationDeltaValue;
let accumRotation = 0;
let rotationDelta = 10;

function setup() {
  let myCanvas = createCanvas(1000, 400);
  myCanvas.position(200, 0);

  angleMode(DEGREES);

  background(120);
  smooth();


  let currPositionY = 5
  let label = createP('spiral radius change');
  label.position(10, currPositionY);
  currPositionY += 35
  radiusDeltaSlider = createSlider(.1, 1, .5, .1);
  radiusDeltaSlider.position(10, currPositionY);
  radiusDeltaSlider.changed(render);
  currPositionY += 10
  radiusDeltaValue = createP(radiusDeltaSlider.value())
  radiusDeltaValue.position(10, currPositionY);

  currPositionY += 15
  label = createP('spiral rotation change');
  label.position(10, currPositionY);
  currPositionY += 35
  rotationDeltaSlider = createSlider(1, 30, 15, 1);
  rotationDeltaSlider.position(10, currPositionY);
  rotationDeltaSlider.changed(render);
  currPositionY += 10
  rotationDeltaValue = createP(rotationDeltaSlider.value())
  rotationDeltaValue.position(10, currPositionY);

  centerY = height / 2;
  centerX = width / 2;

  maxRadius = (centerY < centerX ? height : width) / 2;



}

function render() {
  radiusDeltaValue.html(radiusDeltaSlider.value());
  rotationDeltaValue.html(rotationDeltaSlider.value());
  redraw();

}


function draw() {

  background(0);

  push();
  translate(700, centerY);
  strokeWeight(1);
  drawSpiral(0, 0, maxRadius);
  pop();

}

function drawSpiral(atX, atY, radius) {

  let degree = 0

  let x = atX;
  let y = atY;
  let lastX = x;
  let lastY = y;

  stroke(0, 255, 0);
  for (currRadius = 0; currRadius <= radius; currRadius += radiusDeltaSlider.value()) {



    x = atX + sin(degree) * currRadius;
    y = atY + cos(degree) * currRadius;

    line(lastX, lastY, x, y);

    lastX = x;
    lastY = y;
    degree += rotationDeltaSlider.value();
  }

  noFill();
  strokeWeight(6);
  circle(atX, atY, radius * 2);


}

