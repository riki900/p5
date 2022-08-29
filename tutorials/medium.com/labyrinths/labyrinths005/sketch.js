let shapesFront = [], // Array of shape objects
  shapesBack = []; // Array of background shape parts

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // Angle is interpreted as degrees instead of radians
  colorMode(HSL); // Set colors by Hue, Saturation, Lighness

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
    let points = genSegment(x, y, currentRadius, step),
      hue = random(360),
      saturation = random(100),
      lightness = random(100);

    shapesBack.push(new Shape(points[0], currentRadius, hue, saturation, lightness, x, y));
    shapesFront.push(new Shape(points[1], currentRadius, hue, saturation, lightness, x, y));

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

function genSegment(x, y, r, s, rotateX = 0.75) {
  let startAngle = round(random(360)),
    endAngle = round(startAngle + random(90, 270)),
    pointsBack = [], pointsFront = [];

  if (endAngle < startAngle) [endAngle, startAngle] = [startAngle, endAngle];

  for (let a = startAngle; a <= endAngle; a += s)
  {
    let cx = x + cos(a) * r,
      cy = y + sin(a) * r * rotateX;

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
  constructor (points, radius, hue, saturation, lightness, x, y) {
    this.points = points; // Points array
    this.r = radius;
    this.h = hue;
    this.s = saturation;
    this.l = lightness;
    this.x = x;
    this.y = y;
  }

  draw() {
    if (Array.isArray(this.points) && this.points.length)
    {

      this.points.forEach(i => {

        this.l = map(i[1], this.y - this.r, this.y + this.r, 20, 80); // Map y to ligtness
        stroke(this.h, this.s, this.l); // Set color by H/S/L

        line(i[0], i[1], i[0], height); // Draw a "wall" - a line to the height

        stroke(this.h, this.s, this.l * 0.85); // Make the border a bit darker
        point(i[0], i[1]);

      });

    }
  }
}