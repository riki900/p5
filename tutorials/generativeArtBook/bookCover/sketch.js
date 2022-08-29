

function setup() {
  let myCanvas = createCanvas(330, 500);
  myCanvas.position(350, 0);

  angleMode(DEGREES);

  background(255);
  smooth();


  renderArt(250, 100);

}



function draw() {




}

function renderArt(atX, atY) {

  translate(atX, atY);
  maxCircles = 3;

  let diam = 80;

  for (let i = 1; i <= maxCircles; i++) {
    noFill();
    circle(0, 0, diam);
    diam *= 1.5;
  }


}



