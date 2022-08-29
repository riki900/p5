let border;
let leftMargin;
let rightMargin;
let topMargin;
let bottomMargin;
let stepSlider, rangeSlider;

function setup() {
  createCanvas(400, 400);
  stepSlider = createSlider(1, 100, 10);
  rangeSlider = createSlider(10, 50, 30);

  stepSlider.input(drawLines);
  rangeSlider.input(drawLines);

  textSize(20);

  border = 20;
  leftMargin = border;
  rightMargin = width - border;
  topMargin = border;
  bottomMargin = height - border;
  drawLines();
}

function drawLines() {
  background(120);
  smooth();
  drawRandom();
  drawNoise();
  strokeWeight(1);
  text("☰" + stepSlider.value() + ":" + rangeSlider.value(), leftMargin, topMargin);
}

function draw() {

}

function drawRandom() {

  let origin = 120;
  let range = rangeSlider.value();

  stroke(255);
  strokeWeight(1);
  line(leftMargin, origin, rightMargin, origin);
  let step = stepSlider.value();
  let lastX = leftMargin;
  let lastY = origin;
  let y = lastY;
  stroke(0);
  strokeWeight(2);
  for (let x = leftMargin; x <= rightMargin; x += step) {
    line(x, y, lastX, lastY);
    lastX = x;
    lastY = y;
    y = origin + random(range);
  }

}

function drawNoise() {

  let origin = 220;
  let yNoise = 0;
  let range = rangeSlider.value();
  stroke(255);
  strokeWeight(1);
  line(leftMargin, origin, rightMargin, origin);
  let step = stepSlider.value();
  let lastX = leftMargin;
  let lastY = origin;
  let y = lastY;
  stroke(0);
  strokeWeight(2);
  for (let x = leftMargin; x <= rightMargin; x += step) {
    line(x, y, lastX, lastY);
    lastX = x;
    lastY = y;
    y = origin + noise(yNoise) * range;
    yNoise += 0.1;
  }

}