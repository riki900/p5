let freqSlider;

function setup() {
  createP('Frequency: 0...500');
  freqSlider = createSlider(0, 500, 250);
  currFreq = createP(freqSlider.value());
  let myCanvas = createCanvas(400, 400);
  myCanvas.position(200, 0);
}

function draw() {
  background(0);
  currFreq.html(freqSlider.value())
}
