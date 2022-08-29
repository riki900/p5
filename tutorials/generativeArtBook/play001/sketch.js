let p1, p2, p3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  p1 = createVector(300, 200);
  p2 = createVector(300 - 200, 400);
  p3 = createVector(300 + 200, 400);
}

function draw() {
  background(100);
  noFill();
  triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  fill(0)
  circle(p1.x, p1.y, 10);
  circle(p2.x, p2.y, 10);
  circle(p3.x, p3.y, 10);

  p1.x += random(-5, 5);
  p1.y += random(-5, 5);
  p2.x += random(-3, 3);
  p2.y += random(-3, 3);
  p3.x += random(-7, 7);
  p3.y += random(-7, 7);


}