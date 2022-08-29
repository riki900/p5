
let _cellArray;
let _cellSize = 10;
let _numX, _numY;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);

  _numX = floor(width / _cellSize);
  _numY = floor(height / _cellSize);

  background(128);
  restart();
}

function draw() {
  background(200);



  for (let x = 0; x < _numX; x++) {
    for (let y = 0; y < _numY; y++) {
      _cellArray[x][y].calcNextState();
    }
  }

  translate(_cellSize / 2, _cellSize / 2)
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

  IS_ALIVE = true;
  IS_DEAD = false;

  constructor(x, y) {
    this.x = x * _cellSize;
    this.y = y * _cellSize;
    this.nextState = random([this.IS_ALIVE, this.IS_DEAD]);
    this.state = this.nextState;
    this.neighbors = [];
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }

  calcNextState() {
    let liveCount = 0;
    for (let neighbor of this.neighbors) {
      liveCount += neighbor.state ? 1 : 0;
    }

    if (this.state == this.IS_ALIVE) {
      if (liveCount == 2 || liveCount == 3) {
        this.nextState = this.IS_ALIVE;
      } else {
        this.nextState = this.IS_DEAD;
      }
    }
    if (this.state == this.IS_DEAD) {
      if (liveCount == 3 || liveCount == random(1, 8)) {
        this.nextState = this.IS_ALIVE;
      } else {
        this.nextState = this.IS_DEAD;
      }
    }
  }



  drawMe() {
    this.state = this.nextState;
    stroke(0);
    let fillColor = this.state ? 0 : 255;
    fill(fillColor)
    ellipse(this.x, this.y, _cellSize, _cellSize);
  }

}








