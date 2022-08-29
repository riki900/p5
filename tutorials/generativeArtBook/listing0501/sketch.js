

function setup() {
  createCanvas(windowWidth, windowHeight);
  // let myCanvas = createCanvas(300, 300);
  // myCanvas.position(200, 0);
  background(128);
  //colorMode(HSB, 360, 100, 100);

}

function draw() {

  let xstart = random(10);
  let xnoise = xstart;
  let ynoise = random(10);

  let diam = 75;
  for (let y = 0; y <= height; y += diam) {
    ynoise += 0.01;
    xnoise = xstart;
    for (let x = 0; x <= width; x += diam) {
      xnoise += 0.01;
      let alpha = noise(xnoise, ynoise) * 255;
      //let alpha = random(60, 90);
      //fill(alpha, 100, 100);
      fill(alpha);
      noStroke();
      ellipse(x, y, random(diam), random(diam));
    }
  }

  noLoop();
}




  // noLoop();

