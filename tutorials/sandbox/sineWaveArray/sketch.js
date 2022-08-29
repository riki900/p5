var y0, x1, y1, x2, y2;

function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
  noLoop();

  y0 = [];
  x1 = [];
  y1 = [];
  x2 = [];
  y2 = [];
}

function draw() {
  for (let i = 0; i < 600; i++) {
    y0[i] = height / 2;

    if (i === 0) {
      y1[i] = y0;
      x1[i] = 0;
    } else {
      y1[i] = y1[i - 1];
      x1[i] = x1[i - 1];
    }

    stroke(`rgba(0, 0, 0, ${(1 / width) * (width - x1[i])})`);
    const amplitude = i / 10;

    x2[i] = x1[i] + 1;
    y2[i] = amplitude * sin(i / 10) + y0[i];

    line(x1[i], y1[i], x2[i], y2[i]);

    x1[i] = x2[i];
    y1[i] = y2[i];
  }
}