

let _cellArray;
let _cellSize = 50;
let _numX, _numY;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);

  _numX = floor(width / _cellSize);
  _numY = floor(height / _cellSize);

  colorMode(HSB);
  background(128);
  restart();

  frameRate(10);


  angleMode(DEGREES);
}

function draw() {
  background(200);

  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].calcNextState();
    }
  }

  translate(_cellSize / 2, _cellSize / 2);
  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].drawMe();
    }
  }
}

function mousePressed() {
  restart();
}

function restart() {
  _cellArray = [];
  for (let x = 0; x < _numX; x++) {
    _cellArray[x] = [];
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y] = new Cell(x, y);
    }
  }

  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      let above = y - 1 < 0 ? _numY - 1 : y - 1;
      let below = y + 1 == _numY ? 0 : y + 1;
      let left = x - 1 < 0 ? _numX - 1 : x - 1;
      let right = x + 1 == _numX ? 0 : x + 1;

      _cellArray[x][y].addNeighbor(_cellArray[left][above]);
      _cellArray[x][y].addNeighbor(_cellArray[left][y]);
      _cellArray[x][y].addNeighbor(_cellArray[left][below]);
      _cellArray[x][y].addNeighbor(_cellArray[x][above]);
      _cellArray[x][y].addNeighbor(_cellArray[x][below]);
      _cellArray[x][y].addNeighbor(_cellArray[right][above]);
      _cellArray[x][y].addNeighbor(_cellArray[right][y]);
      _cellArray[x][y].addNeighbor(_cellArray[right][below]);
    }
  }
}

class Cell {
  constructor(x, y) {
    this.x = x * _cellSize;
    this.y = y * _cellSize;
    this.IS_ALIVE = true;
    this.IS_DEAD = false;
    this.nextState = random([this.IS_ALIVE, this.IS_DEAD]);
    this.state = this.nextState;
    this.neighbors = [];
    this.age = 0;
    this.liveCount = 0;
    this.fillColor = color(random(360), 100, 100);
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }

  calcNextState() {
    this.liveCount = 0;
    for (let neighbor of this.neighbors) {
      this.liveCount += neighbor.state ? 1 : 0;
    }

    if (this.state == this.IS_ALIVE) {
      if (this.liveCount == 2 || this.liveCount == 3) {
        this.nextState = this.IS_ALIVE;
        this.age++;
      } else {
        this.nextState = this.IS_DEAD;
        this.age = 0;
      }
    }
    if (this.state == this.IS_DEAD) {
      if (this.liveCount == 3) {
        this.nextState = this.IS_ALIVE;
        this.age++;
      } else {
        this.nextState = this.IS_DEAD;
        this.age = 0;
      }
    }
    this.age;
  }

  drawMe() {
    this.state = this.nextState;
    if (this.state == this.IS_DEAD) {
      return;
    }
    noStroke();

    push();
    fill(this.fillColor);
    translate(this.x, this.y);
    let rotateDir = floor(random(-1, 2));
    rotate(this.age * 10 * rotateDir);
    //rectMode(CENTER);
    //rect(0, 0, diam, diam);
    let triRight = this.liveCount * 100;
    let triTop = constrain(this.age * 50, 0, height / 2);

    triangle(0, 0, triRight / 2, triTop, triRight, 0);
    // stroke(fillColor);
    // strokeWeight(this.liveCount * 5);
    // line(0, 0, 0, this.liveCount * 30);
    pop();
  }
}
