let banner;
let banners = [];

function setup() {
  createCanvas(800, 400);
  for (let i = 0; i < 6; i++) {
    banners.push(new Banner(10 + i * 50));
  }
}

function draw() {
  background(0);
  for (let banner of banners) {
    banner.move();
    banner.show();
  }
}

class Banner {

  constructor(y) {
    this.y = y;
    this.init();
  }

  init() {
    this.l = random(20, 80);
    this.h = random(2, 16);
    this.v = random(2, 10);
    this.x = 0 - this.l;
  }

  move() {
    this.x += this.v;
    if (this.x > width + this.l) {
      this.init();
    }
  }

  show() {
    strokeWeight(this.h);
    stroke(255, 0, 0);
    line(this.x, this.y, this.x + this.l, this.y);
  }
}
