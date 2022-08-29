

function setup() {

  let myCanvas = createCanvas(1000, 500);
  myCanvas.position(250, 0);
  background(128);

  angleMode(DEGREES);
  noLoop();

  for (let i = 0; i < random(3, 10); i++) {
    drawArt(random(100, width), random(100, height));
  }


}



function drawArt(atX, atY) {

  let radius = 10;
  let x = atX;
  let y = atY;
  let lastX = x;
  let lastY = y;
  let radiusNoise = random(10);
  let myStrokeWeight = random(5, 15);
  let isRender = false;

  let times = random(10, 20);
  let changeColor = floor(random(45, 90));

  for (let angle = 0; angle < 360 * times; angle += 5) {
    if (angle % changeColor == 0) {
      stroke(random(255), random(255), random(255));
    }

    strokeWeight(myStrokeWeight);

    if (isRender == true) {
      line(lastX, lastY, x, y);
    }
    isRender = true;

    lastX = x;
    lastY = y;

    radiusNoise += 0.05;
    let thisRadius = radius + (noise(radiusNoise) * 200);
    x = atX + (cos(angle) * thisRadius);
    y = atY + (sin(angle) * thisRadius);

  }
}

function draw() {




}

