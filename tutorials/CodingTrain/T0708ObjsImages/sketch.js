
let bubbles = [];
let pics = [];

function preload() {
  for (let i = 1; i <= 6; i++) {
    pics.push(loadImage(`images/photo${i}.png`));
  }
}

function setup() {
  createCanvas(800, 600);
  let bubble;
  for (let pic of pics) {
    bubble = new Bubble(pic, random(width), random(height), random(80, 200));
    bubbles.push(bubble);
  }
}


function draw() {
  background(0);

  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].isInside(mouseX, mouseY)) {

      if (mouseIsPressed) {
        // click: remove from array
        bubbles.splice(i, 1);
      } else {
        // hover: grow in size
        bubbles[i].r += .2;
      }
    }
  }

  if (bubbles.length == 0) {
    noLoop;
  }

  for (let bubble of bubbles) {
    bubble.move();
    bubble.show();
  }
}


class Bubble {
  constructor(pic, x, y, r) {
    this.pic = pic;
    this.x = x;
    this.y = y;
    this.r = r;
    this.deltaV = 0; //random(3, 7);
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

    image(this.pic, this.x, this.y, this.r, this.r);
  }
}
