
let _cellArray;
let _cellSize;
let _numX, _numY;

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);

  restart();
}

function draw() {
  background(255);



  for (let x = 0; x < _numX; x++)
  {
    for (let y = 0; y < _numY; y++)
    {
      _cellArray[x][y].calcNextState();
    }
  }

  translate(_cellSize / 2, _cellSize / 2)
  for (let x = 0; x < _numX; x++)
  {
    for (let y = 0; y < _numY; y++)
    {
      _cellArray[x][y].drawMe();
    }
  }


}

function mousePressed() {
  restart();
}

function restart() {
  _cellSize = floor(random(20, 40));
  _numX = floor(width / _cellSize);
  _numY = floor(height / _cellSize);
  _cellArray = [];
  for (let x = 0; x < _numX; x++)
  {
    _cellArray[x] = [];
    for (let y = 0; y < _numY; y++)
    {
      _cellArray[x][y] = new Cell(x, y);
    }
  }

  for (let x = 0; x < _numX; x++)
  {
    for (let y = 0; y < _numY; y++)
    {
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

  constructor (x, y) {
    this.x = x * _cellSize;
    this.y = y * _cellSize;
    this.nextState = floor(random(2));
    this.state = this.nextState;
    this.neighbors = [];
  }

  addNeighbor(neighbor) {
    this.neighbors.push(neighbor);
  }

  calcNextState() {

    if (this.state == 0)
    {
      let firingCount = 0;
      for (let i = 0; i < this.neighbors.length; i++)
      {
        if (this.neighbors[i].state == 1)
        {
          firingCount++;
        }
      }
      if (firingCount == 2)
      {
        this.nextState = 1;
      } else
      {
        this.nextState = this.state;
      }
    } else if (this.state == 1)
    {
      this.nextState = 2;
    } else if (this.state == 2)
    {
      this.nextState = 0;
    }
  }





  drawMe() {
    this.state = this.nextState;
    noStroke();
    if (this.state == 1)
    {
      fill('red');
    } else if (this.state == 2)
    {
      fill('blue');
    } else
    {
      fill(255);
    }
    ellipse(this.x, this.y, _cellSize, _cellSize);
  }

}








