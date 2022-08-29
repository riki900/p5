

function setup() {

  let myCanvas = createCanvas(600, 600);
  myCanvas.position(200, 0);

  colorMode(HSB);
  angleMode(DEGREES);
  smooth();

  background(0);
  hsbDemo(floor(random(360)));
}




// function draw() {

//   noLoop();

// }


function hsbDemo(hue) {
  let gridOriginX = 0;
  let gridOriginY = 50;
  let cellsPerAxis = 20;
  let gridSizeY = height - gridOriginY;
  let gridSizeX = width;
  let cellSizeY = floor(gridSizeY / cellsPerAxis);
  let cellSizeX = floor(gridSizeX / cellsPerAxis);
  fill(hue, 100, 100);
  rect(0, 0, width, gridOriginY);
  textSize(30);
  fill(0);
  textStyle(BOLD);
  text(hue, 100, 40);
  stroke(2);
  push();
  translate(gridOriginX, gridOriginY);

  for (let x = 0; x < cellsPerAxis; x++) {
    let saturation = map(x, 0, cellsPerAxis, 100, 0);
    for (let y = 0; y < cellsPerAxis; y++) {
      let brigtness = map(y, 0, cellsPerAxis, 100, 0);
      fill(hue, saturation, brigtness);
      noStroke();
      rect(x * cellSizeX, y * cellSizeY, cellSizeX, cellSizeY);
    }
  }
  pop();
}

function mouseMoved() {

  if (mouseY > 50) {
    return;
  }

  newHue = floor(map(constrain(mouseX, 0, width), 0, width, 0, 360));
  hsbDemo(newHue);
}
