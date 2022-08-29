let theta = .02;
let maxSize;
let fromColor, toColor;

function setup() {
  createCanvas(400, 400);
  maxSize = height / 2;
  fromColor = color(255, 0, 255);
  toColor = color(255, 255, 0);
}

function draw() {

  background(0, 0, 128);

  let x = width / 2;
  let y = height / 2;
  let size = sin(theta) * maxSize;
  let fillColor = color(255, 0, 0);

  noFill();
  strokeWeight(4);
  //fill(fillColor, 100);
  circle(x, y, size);
  strokeWeight(2);
  //fill(fillColor, 10);
  circle(x, y, maxSize - abs(size));

  theta += .02;
  // noLoop();


}




