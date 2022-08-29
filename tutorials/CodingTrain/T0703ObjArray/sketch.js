const MAXBUBBLES = 10;

let bubbles = [];

function setup() {
  createCanvas(800, 600);
  let bubble;
  for (let i = 0; i < MAXBUBBLES; i++) {
    bubble = new Bubble(random(width), random(height), random(30, 80));
    bubbles.push(bubble);
  }
}


function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }

}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.deltaV = random(5);
    this.fillColor = 128;
    this.strokeColor = 255;

  }

  move() {
    this.x += random(-this.deltaV, this.deltaV);
    this.y += random(-this.deltaV, this.deltaV);
  }

  show() {
    fill(this.fillColor, 100);
    stroke(this.fillColor);
    strokeWeight(4);
    circle(this.x, this.y, this.r);
  }
}
