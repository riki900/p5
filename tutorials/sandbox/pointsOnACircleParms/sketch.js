let centerX, centerY;
let numberOfPoinstSlider, numberOfPointsValue;
let radiusSlider, radiusSliderValue;
let accumRotation = 0;
let rotationDelta = 10;

function setup() {
  let myCanvas = createCanvas(1000, 400);
  myCanvas.position(200, 0);

  angleMode(DEGREES);

  background(120);
  smooth();

  centerY = height / 2;
  centerX = width / 2;

  maxRadius = (centerY < centerX ? height : width) / 2;


  let currPositionY = 5
  let label = createP('number of points');
  label.position(10, currPositionY);
  currPositionY += 35
  numberOfPoinstSlider = createSlider(3, 8, 3);
  numberOfPoinstSlider.position(10, currPositionY);
  numberOfPoinstSlider.changed(render);
  currPositionY += 10
  numberOfPointsValue = createP(numberOfPoinstSlider.value())
  numberOfPointsValue.position(10, currPositionY);

  currPositionY += 15
  label = createP('size radius');
  label.position(10, currPositionY);
  currPositionY += 35
  radiusSlider = createSlider(50, maxRadius, maxRadius / 2, 1);
  radiusSlider.position(10, currPositionY);
  radiusSlider.changed(render);
  currPositionY += 10
  radiusSliderValue = createP(radiusSlider.value())
  radiusSliderValue.position(10, currPositionY);





}

function render() {
  numberOfPointsValue.html(numberOfPoinstSlider.value());
  radiusSliderValue.html(radiusSlider.value());
  redraw();

}


function draw() {

  background(0);

  push();
  translate(700, centerY);
  strokeWeight(1);
  drawPolygon(0, 0, numberOfPoinstSlider.value(), radiusSlider.value());
  pop();

}

function drawPolygon(atX, atY, points, radius) {

  let step = floor(360 / points);

  let x = atX;
  let y = atY;
  let lastX = x;
  let lastY = y;

  stroke(0, 255, 0);

  noFill();
  beginShape();
  for (let currDegree = 0; currDegree <= 360; currDegree += step) {
    x = atX + sin(currDegree) * radius;
    y = atY + cos(currDegree) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);



  noFill();
  stroke(255);
  strokeWeight(1);
  circle(atX, atY, radius * 2);

}

