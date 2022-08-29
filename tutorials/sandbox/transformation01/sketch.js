let angle = 0;
let angleDelta = 1;
let theta = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  push();
  textSize(40);
  translate(250, 200);
  rotate(angle += angleDelta)
  let virus = "🦠";
  let virusSize = constrain(abs(sin(theta)) * 3, 1, 3);
  scale(virusSize);
  text(virus, -20, 20);
  pop();



  textSize(50);
  text("🀵", 100, 100);

  theta += 0.5;

}