let centerX, centerY, radius;

function setup() {
  createCanvas(800, 800);
  background(255, 255, 255);

  centerX = width / 2;
  centerY = height / 2;
  radius = 350;
  circle(centerX, centerY, radius * 2);
  angleMode(DEGREES);

}

function draw() {
  // draw two random chords each frame
  // randomChord();
  for (let angle1 = 0; angle1 <= 180; angle1 += 45) {
    let xpos1 = centerX + radius * cos(angle1);
    let ypos1 = centerY + radius * sin(angle1);
    fill(0);
    circle(xpos1, ypos1, 10);
  }
  noLoop();
}

function randomChord(radius) {
  // find a random point on a circle
  let angle1 = random(0, 2 * PI);
  let xpos1 = centerX + radius * cos(angle1);
  let ypos1 = centerY + radius * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = centerX + radius * cos(angle2);
  let ypos2 = centerY + radius * sin(angle2);

  stroke(random(255), random(255), random(255), 50);
  strokeWeight(random(8));
  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
}

