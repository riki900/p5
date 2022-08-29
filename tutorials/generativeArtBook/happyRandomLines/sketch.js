let centerX, centerY

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(6);

  centerX = width / 2;
  centerY = width / 2;

}

function draw() {

  stroke(random(255), random(255), random(255));
  strokeWeight(random(5, 20));
  line(random(centerX), random(height), random(width), random(height));
}