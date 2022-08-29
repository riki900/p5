
let gridX = 60;
let gridY = 60;
let cellHeight, cellWidth;
let cells = [];

function setup() {
  let canvas = createCanvas(600, 600);
  background(0);
  cellWidth = floor(width / gridX);
  cellHeight = floor(height / gridY);

  for (let x = 0; x < gridX; x++)
  {
    cells[x] = []
    for (let y = 0; y < gridY; y++)
    {
      cells[x][y] = new Cell(x, y, cellWidth, cellHeight);
    }
  }
}
function draw() {
  background(0);
  for (let x = 0; x < gridX; x++)
  {
    for (let y = 0; y < gridY; y++)
    {
      cells[x][y].drawMe(floor(random(0, 8)));
    }
  }

  noLoop();

}

function mousePressed() {
  redraw();
}

class Cell {

  constructor (x, y, cellWidth, cellHeight) {
    this.x = x;
    this.y = y;
    this.cellWidth = cellWidth;
    this.cellHeight = cellHeight;
    this.posX = this.x * this.cellWidth;
    this.posY = this.y * this.cellHeight;
  }

  drawMe(shapeId) {
    // noFill();
    // stroke(255);
    // strokeWeight(1);
    // rect(this.posX, this.posY, this.posX + this.cellWidth, this.posY + this.cellHeight);

    stroke(0, 255, 0);
    strokeWeight(1);
    switch (shapeId)
    {
      // skip cell
      case 0:
        break;
      // diagonal \
      case 1:
        line(this.posX, this.posY, this.posX + this.cellWidth, this.posY + this.cellHeight);
        break;
      // diagonal /
      case 2:
        line(this.posX + this.cellWidth, this.posY, this.posX, this.posY + this.cellHeight);
        break;
      // line at left
      case 3:
        line(this.posX, this.posY, this.posX, this.posY + this.cellHeight);
        break;
      // line at right
      case 4:
        line(this.posX + this.cellWidth, this.posY, this.posX + this.cellWidth, this.posY + this.cellHeight);
        break;
      // line at top
      case 5:
        line(this.posX, this.posY, this.posX + this.cellWidth, this.posY);
        break;
      // line at bottom
      case 6:
        line(this.posX, this.posY + this.cellHeight, this.posX + this.cellWidth, this.posY + this.cellHeight);
        break;
      // horiz line 1/2 down
      case 7:
        line(this.posX, this.posY + this.cellHeight / 2, this.posX + this.cellWidth, this.posY + this.cellHeight / 2);
        break;

      default:
        break;
    }


  }
}