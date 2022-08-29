let centerH = 0;
let amplitudeSlider, freqSlider;

function setup() {
  let myCanvas = createCanvas(1000, 400);
  myCanvas.position(200, 0);


  background(120);
  noLoop();
  smooth();

  let groupAnchorY = 5
  let label = createP('Amplitude');
  label.position(10, groupAnchorY);
  amplitudeSlider = createSlider(10, 150, 100);
  amplitudeSlider.position(10, groupAnchorY + 35);
  amplitudeSlider.changed(redraw);

  groupAnchorY += 50;
  label = createP('Frequency');
  label.position(10, groupAnchorY);
  freqSlider = createSlider(10, 150, 100);
  freqSlider.position(10, groupAnchorY + 35);
  freqSlider.changed(redraw);

  centerH = height / 2;


}

function renderWave() {
  redraw();
}


function draw() {

  background(120);


  let y = centerH;
  let theta = 0;
  let prevY = y;
  let prevX = 0;
  let sinValue = 0;
  for (let x = 0; x <= width; x++) {
    strokeWeight(map(abs(sinValue), 0, 1, 1, 20));
    // stroke(0, 0, 255);
    // point(x, y);
    // strokeWeight(1);
    stroke(0, 0, 255);
    line(prevX, prevY, x, y);
    // stroke(0, 0, 255);
    // line(prevX, prevY + 40, x, y + 40);
    prevY = y;
    prevX = x;
    sinValue = sin(theta);
    y = centerH + sinValue * amplitudeSlider.value();
    theta += freqSlider.value() / 1000;

  }

}
