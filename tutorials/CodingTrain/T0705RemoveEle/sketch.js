const MAXBUBBLES = 10;

let bubbles = []

funct

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

  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isInside(mouseX, mouseY)) {
      if (mouseIsPressed) {
        bubbles.splice(i, 1);
      } else {
        bubbles[i].fillAlpha += .2;
      }
    }
  }

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
    this.deltaV = random(3, 7);
    this.fillColor = 255;
    this.fillAlpha = 0;
    this.strokeColor = 255;

  }

  isInside(otherX, otherY) {
    let len = dist(this.x, this.y, otherX, otherY);
    return (len < this.r);
  }

  move() {
    this.x += random(-this.deltaV, this.deltaV);
    this.y += random(-this.deltaV, this.deltaV);
  }

  show() {
    fill(this.fillColor, this.fillAlpha);
    stroke(this.strokeColor);
    strokeWeight(4);
    circle(this.x, this.y, this.r);
  }
}
