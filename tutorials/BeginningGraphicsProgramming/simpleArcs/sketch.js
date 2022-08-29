

function setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);

  background(255);
  angleMode(DEGREES);
  // let simpleArc = new SimpleArc(width / 2, height / 2, 200, 50, 45, 315);
  // simpleArc.render();
  // let simpleArc2 = new SimpleArc(width / 2, height / 2, 125, 50, 270, 450);
  // simpleArc2.render();
  // ellipse(width / 2, height / 2, 125, 125)
  fill(255, 0, 0);
  //arc(width / 2, height / 2, 80, 80, 0, PI + QUARTER_PI, CHORD);
  ellipse(50, 50, 80, 80);
  //arc(50, 55, 50, 50, 0, HALF_PI);
  //arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);
}

function draw() {

  arc(200, 200, 50, 50, PI, PI + QUARTER_PI)

}

// function mousePressed() {

//   let simpleArc = new SimpleArc(random(width), random(height),
//     random(50, height / 2), random(20, 100),
//     random(0, 330), random(0, 330));
//   simpleArc.render();
//   redraw();
// }

class SimpleArc {

  constructor (cx, cy, radius, thick, startAngle, endAngle) {
    // center of the arc circle
    this.cx = cx;
    this.cy = cy;
    // dimensions
    this.radius = floor(radius);
    this.thick = floor(thick);
    // arc angles
    this.anglePad = 0;
    this.startAngle = startAngle - this.anglePad;
    this.endAngle = endAngle + this.anglePad;
    if (this.startAngle > this.endAngle)
    {
      let saveValue = this.endAngle;
      this.endAngle = this.startAngle;
      this.startAngle = saveValue;
    }
    this.angleRange = this.endAngle - this.startAngle;
    // mid point of the arc
    this.cr = this.radius + this.thick / 2;
    this.acx = this.cr + cos(this.startAngle + this.angleRange / 2);
    this.acy = this.cr + sin(this.startAngle + this.angleRange / 2);
    // points to draw (higher number makes a smoother curve)
    // formula from the book
    this.curvePoints = 1 + round(49 * this.angleRange / TWO_PI);
    // fill color
    this.setColor(color(random(255), random(255), random(255), 255));

    // animation settings
    // rotation
    this.vr = 0;
    this.setRotation(0);
    // movement
    this.vx = 0;
    this.vy = 0;


  }

  setColor(newColor) {
    this.color = newColor;
  }

  setRotation(newSpeed) {
    this.vrStep = newSpeed;
  }

  render() {

    push();

    // position where to draw
    translate(this.cx + this.acx, this.cy + this.acy);

    // rotate canvas if set
    if (abs(this.vr) > 0)
    {
      rotate(this.vr);
      this.vr += this.vrStep;
    }

    // set drawing color
    fill(this.color);
    stroke(this.color);

    // calc values for drawing the segments
    let stepSize = this.angleRange / this.curvePoints;
    let vAngle = this.startAngle;

    // start the shape
    beginShape(QUAD_STRIP);

    // plot the shape segments
    for (let i = 0; i < this.curvePoints + 1; i++)
    {
      // plot the inside arc edge
      vertex(cos(vAngle) * this.radius - this.acx, sin(vAngle) * this.radius - this.acy);
      // plot the outside arc edge
      vertex(cos(vAngle) * (this.radius + this.thick) - this.acx, sin(vAngle) * (this.radius + this.thick) - this.acy);
      vAngle += stepSize;
    }
    endShape();
    pop();
    // move the arc
    this.cx += this.vx;
    this.cy += this.vy;
  }
}