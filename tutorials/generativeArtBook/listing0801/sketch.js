let maxLevels = 3;
let maxChildren = 3;
let trunk;

function setup() {
  let myCanvas = createCanvas(750, 500);
  myCanvas.position(400, 0);
  angleMode(DEGREES);
  background(255);
  noFill();
  smooth();
  newTree();

}

function draw() {
  background(255);
  trunk.updateMe(width / 2, height / 2);
  trunk.drawMe();
  noLoop();
}

// function mousePressed() {
//   newTree();
// }

function newTree() {

  trunk = new Branch(1, 0, width / 2, height / 2);

}

class Branch {

  constructor (level, index, x, y) {
    this.level = int(level);
    this.index = int(index);
    this.children = [];
    this.x = int(x);
    this.y = int(y);
    this.strokeW = (1 / this.level) * 10; 
    this.alph = 255 / this.level;
    this.len = (1 / this.level) * random(500);
    this.rot = random(360);
    this.lenChange = random(10) - 5;
    this.rotChange = random(10) - 5;
    this.updateMe(this.x, this.y);
    if (this.level < maxLevels)
    {
      for (let i = 0; i < maxChildren; i++)
      {
        this.children.push(new Branch(level + 1, i, this.endX, this.endY));
      }
    }

  }

  updateMe(x, y) {
    this.x = int(x);
    this.y = int(y);
    this.endX = int(this.x + (this.level * random(-50, 50)));
    this.endY = int(this.y + (this.level * random(-75, 25)));
    for (const child of this.children)
    {
      child.updateMe(this.endX, this.endY);
    }
  }

  drawMe() {
    strokeWeight(this.strokeW);
    stroke(0, this.alph);
    fill(255, this.alph);
    line(this.x, this.y, this.endX, this.endY);
    ellipse(this.endX,this.endY, this.len / 12, this.len / 12)
    ellipse(this.x, this.y, 5 * this.level, 5 * this.level);
    for (const child of this.children)
    {
      child.drawMe();
    }
  }
}

