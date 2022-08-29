function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Angle is interpreted as degrees instead of radians
}

function draw() {
  background(0);
  stroke(255);

  // Draw a circle by the points
  let x = width / 2,
    y = height / 2, // Canvas center
    radius = min(width, height) / 3,
    step = 1, // Step
    weight = 1; // Point thickness

  strokeWeight(weight);

  for (let a = 0; a < 360; a += step)
  {
    let cx = x + cos(a) * radius, // Current x
      cy = y + sin(a) * radius; // Current y

    point(cx, cy);
  }
}