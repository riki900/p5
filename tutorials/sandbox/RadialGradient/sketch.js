function setup() {
  createCanvas(256, 256);
  noSmooth();
}

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let distanceFromCenter = dist(x, y, width / 2, height / 2);
      stroke(255 - 2 * distanceFromCenter, 0, 100);
      point(x, y);
    }
  }
}
