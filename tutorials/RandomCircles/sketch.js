function setup() {
  createCanvas(windowWidth, windowHeight);
  background(random(256), random(256), random(256));
  noStroke();

}

function draw() {

  let size = random(windowWidth * .05, windowWidth * .1);

  let x = random(width);
  let y = random(height);

  for (let ring = size; ring >= 0; ring -= random(2, 10)) {
    fill(random(256), random(256), random(256));
    circle(x, y, ring);
  }
}





