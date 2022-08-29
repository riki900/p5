let shapesFront = [], // Array of shape objects
  shapesBack = []; // Array of background shape parts

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Angle is interpreted as degrees instead of radians

  // Draw a circle by the points
  let x = width / 2,
    y = height / 2, // Canvas center
    step = 0.1, // Step
    weight = 2, // Thickness
    amount = 10, // Amount of arcs
    gap = 30, // Space between circles
    currentRadius = 50; // Initial/current radius

  strokeWeight(weight);

  // Generate shapes points
  for (let i = 0; i < amount; i++)
  {
    let col = color(random(255), random(255), random(255)),
      points = genSegment(x, y, currentRadius, step);

    shapesBack.push(new Shape(points[0], col));
    shapesFront.push(new Shape(points[1], col));

    currentRadius += weight + gap; // Add gap and thickness to the current radius
  }

}

function draw() {
  background(0);
  stroke(255);

  // Loop through the shapes array and draw each one
  shapesBack.reverse().forEach(shape => shape.draw()); // Reverse
  shapesFront.forEach(shape => shape.draw());

  noLoop(); // Stop animation
}

//

function genSegment(x, y, r, s) {
  let startAngle = round(random(360)),
    endAngle = round(startAngle + random(90, 270)),
    pointsBack = [], pointsFront = [];

  if (endAngle < startAngle) [endAngle, startAngle] = [startAngle, endAngle];

  for (let a = startAngle; a <= endAngle; a += s)
  {
    let cx = x + cos(a) * r,
      cy = y + sin(a) * r;

    if (sin(a) <= 0)
    {
      pointsBack.push([cx, cy]);
    } else
    {
      pointsFront.push([cx, cy]);
    }

  }

  return [pointsBack, pointsFront];
}

//

class Shape {
  constructor (points, color) {
    this.points = points; // Points array
    this.col = color;
  }

  draw() {
    if (Array.isArray(this.points) && this.points.length)
    {

      this.points.forEach(i => {

        stroke(this.col);

        line(i[0], i[1], i[0], height); // Draw a "wall" - a line to the height
        point(i[0], i[1]);

      });

    }
  }
}