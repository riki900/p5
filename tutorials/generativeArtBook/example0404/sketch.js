

function setup() {

  let myCanvas = createCanvas(1000, 500);
  myCanvas.position(250, 0);
  background(0);

  angleMode(DEGREES);

}

function draw() {

  background(0);
  for (let i = 0; i < 100; i++) {
    drawArt(random(width), random(height));
  }

}



function drawArt(atX, atY) {

  let radius = random(20, 200);
  let x = atX;
  let y = atY;
  let lastX = x;
  let lastY = y;
  let radiusNoise = random(10);
  let myStrokeWeight = random(1, 4);
  let myStrokeColor = color(random(255), random(255), random(255));
  let isRender = false;

  let times = 3;
  let changeColor = floor(random(45, 90));

  for (let angle = 0; angle <= 360 * times; angle += 5) {

    radiusNoise += 1.5;
    let offset = noise(radiusNoise) * 30;
    x = atX + (cos(angle) * radius) + offset;
    y = atY + (sin(angle) * radius) + offset;

    strokeWeight(myStrokeWeight);
    stroke(myStrokeColor);
    if (isRender == true) {
      line(x, y, lastX, lastY);
    }
    isRender = true;

    lastX = x;
    lastY = y;




  }
}

