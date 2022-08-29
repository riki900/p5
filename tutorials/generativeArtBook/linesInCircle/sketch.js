function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  let circleCenter = 0;
  let diam = 300
  translate(200, 200)
  noFill();
  circle(0, 0, diam);
  for (let i = 10; i < diam; i += 30) {
    stripeCircle(circleCenter, circleCenter, diam, i)
  }
  rotate(45);
  for (let i = 10; i < diam; i += 30) {
    stripeCircle(circleCenter, circleCenter, diam, i)
  }
  rotate(45);
  for (let i = 10; i < diam; i += 30) {
    stripeCircle(circleCenter, circleCenter, diam, i)
  }
  rotate(45);
  for (let i = 10; i < diam; i += 30) {
    stripeCircle(circleCenter, circleCenter, diam, i)
  }

}

function draw() {

}

function stripeCircle(originX, originY, diam, pixlesFromTop) {

  let x = originX
  let y = originY - diam / 2 + pixlesFromTop
  while (dist(originX, originY, x, y) < diam / 2) {
    x++
  }
  let lineEnd = x;
  let lineStart = originX - (x - originX);
  line(lineStart, y, lineEnd, y);
}