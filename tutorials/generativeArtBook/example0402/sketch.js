let atX, atY;
let strokeColor = 0;
let radiusMax = 600;
let radiusNoiseDelta = 0.05;
let radiusNoise = 10;

let angleNoiseDelta = 0.05;
let angleNoise = 1;

let centerX, centerY;

let angle = 0 //random(180);

function setup() {
  let myCanvas = createCanvas(600, 600);
  myCanvas.position(150, 0);

  angleMode(DEGREES);

  background(239, 229, 213);

  centerX = width / 2;
  centerY = height / 2;

}

function draw() {

  angle += 1;
  angleNoise += angleNoiseDelta;
  radiusNoise += radiusNoiseDelta;
  let angleOffset = noise(angleNoise) * 3;
  let radius = noise(radiusNoise) * radiusMax + 1;
  angle += angleOffset;
  if (angle > 360 || angle < 0) {
    angle = 0;
  }

  atX = centerX + angleOffset * 5;
  atY = centerY + angleOffset * 5;

  let x1 = atX + (cos(angle) * radius);
  let y1 = atY + (sin(angle) * radius);

  let oppAngle = angle + 180;
  let x2 = atX + (cos(oppAngle) * radius);
  let y2 = atY + (sin(oppAngle) * radius);

  strokeWeight(1);
  strokeColor++;
  if (strokeColor > 128) {
    strokeColor = 0;
  }

  //strokeColor = color(random(255), random(255), random(255))

  stroke(strokeColor);

  line(x1, y1, x2, y2);

}