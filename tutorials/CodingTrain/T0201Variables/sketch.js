function setup() {
  createCanvas(400, 400);
  //frameRate(20);
  background(100);
}

function draw() {


  let boxSize = random(20,200);
  let strokeSize = random(5,10);
  rectMode(CENTER);
  strokeWeight(strokeSize);
  stroke(0,0,255,10);
  fill(0,255,0,10);
  rect(200,200,boxSize,boxSize);


}
