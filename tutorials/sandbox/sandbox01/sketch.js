"use strict"
let x = 0;
let y = 0;
let xDelta = 1;
let yDelta = 1;

function setup() {
  createCanvas(400, 400);
  rectMode(CORNER);
}

function draw() {

  background(255);
  strokeWeight(8);
  fill(255, 0, 0);
  rect(0, 0, x, y);
  fill(0, 0, 255);
  rect(x, 0, width, y);
  fill(0, 0, 255);
  rect(0, y, x, height);
  fill(255, 0, 0);
  rect(x, y, width, height);

  x += xDelta;
  if (x > width || x < 0) {
    xDelta *= -1;
  }

  line(0, y, width, y);
  y += yDelta;
  if (y > height || x < 0) {
    yDelta *= -1;
  }

}




