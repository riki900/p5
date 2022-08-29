// initialise the variables
var y0, x1, y1, x2, y2;

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);

  // set the base of y to be half te size of the canvas
  y0 = height / 2;
  // set the first value of y1 to start at the midway point
  y1 = y0;
  // tell x axis to start at left side of the canvas
  x1 = 0;
}

function draw() {
  // this sets our wave to be half the size of the height (+150 up and -150 down)
  const amplitude = y0 / 2;

  // on each frame, let's add 1 to the last x1 value
  x2 = x1 + 1;
  // multiple amplitude by the sin calc output and offset it to the midway point
  y2 = amplitude * sin(frameCount / 100) + y0;

  // draw a line from the last known point to the new one
  line(x1, y1, x2, y2);

  // update x1, y1 to be the last known point for the next iteration
  x1 = x2;
  y1 = y2;
}