let renders = []
let rendersIdx = 0;
function setup() {
  createCanvas(800, 800);
  renders.push(drawCone);
  renders.push(drawConcentric);
  renders.push(drawInside);

}

function draw() {
  background(255);
  noFill();
  renders[rendersIdx]();
}
function keyPressed() {
  rendersIdx++;
  if (rendersIdx >= renders.length) {
    rendersIdx = 0;
  }
}

function drawCone() {
  let x = width - 10;
  let y = height / 2;
  for (let dia = 10; dia < width; dia += 10) {
    circle(x - dia, y, dia);
  }
}

function drawConcentric() {
  let x = width / 2;
  let y = height / 2;
  for (let dia = 10; dia < width; dia += 10) {
    circle(x, y, dia);
  }
}

function drawInside() {
  let x = width / 2;
  let y = height / 2;
  // let step = 10;
  // for (let dia = width; dia > step; dia -= step) {
  //   circle(x += step, y, dia);
  circle(x, y, width);
  step = 5;
  for (let dia = step; dia < width / 2; dia += step)
    circle(width - dia, y, dia * 2);
}

