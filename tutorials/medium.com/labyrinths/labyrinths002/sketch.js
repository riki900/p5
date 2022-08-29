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
    step = 0.1, // Step
    weight = 2, // Thickness
    amount = 10, // Amount of arcs
    gap = 20, // Space between circles
    currentRadius = 30; // Initial/current radius

  strokeWeight(weight);

  for (let i = 0; i < amount; i++)
  {
    let startAngle = random(360), // Random start angle
      endAngle = startAngle + random(90, 270); // Random end angle (from 90 to 270 deg)

    stroke(random(255), random(255), random(255)); // Set random color (RGB)

    // Draw an arc
    for (let a = startAngle; a <= endAngle; a += step)
    {
      let cx = x + cos(a) * currentRadius, // Current x
        cy = y + sin(a) * currentRadius; // Current y

      point(cx, cy);
    }

    currentRadius += gap; // Add gap and thickness to the current radius
  }

  noLoop(); // Stop animation
}