let hueSlider, saturationSlider, brightnessSlider;
let colorWheel;

function preload() {
  colorWheel = loadImage('images/color-wheel.jpg');
}

function setup() {
  // create canvas
  createCanvas(800, 400);
  textSize(20);
  //noStroke();
  colorMode(HSB);
  angleMode(DEGREES);

  // create sliders
  hueSlider = createSlider(0, 360, 0);
  hueSlider.position(20, 20);
  saturationSlider = createSlider(0, 100, 100);
  saturationSlider.position(20, 50);
  brightnessSlider = createSlider(0, 100, 100);
  brightnessSlider.position(20, 80);

  image(colorWheel, 400, 0, 400, 400);
}

function draw() {
  const hue = hueSlider.value();
  const saturation = saturationSlider.value();
  const brightness = brightnessSlider.value();
  fill(hue, saturation, brightness);
  rect(0, 0, 400, 400);
  fill(0, 0, 0);
  text('Hue:' + hue, hueSlider.x * 2 + hueSlider.width, 35);
  text('Saturation:' + saturation, saturationSlider.x * 2 + saturationSlider.width, 65);
  text('Brightness:' + brightness, brightnessSlider.x * 2 + brightnessSlider.width, 95);



  // rotate pointer to the current hue value
  image(colorWheel, 400, 0, 400, 400);
  strokeWeight(5);

  // draw pointer at center of the image
  translate(600, 200);
  // use -90 to adjust the polar 0 (east) to image 0 (north)
  rotate(-90 + hueSlider.value());
  fill(hue, 100, 100);
  ellipse(0, 0, 40, 40);
  line(0, 0, 200, 0);
  strokeWeight(1);
  ellipse(170, 0, 20, 20);
}
