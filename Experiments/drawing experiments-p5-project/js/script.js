/**
Title of Project: Drawing
Author Name: Suzana Burlea

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  createCanvas (500, 500);
  background (77,255,255);
  point (250, 250);

  rectMode(CENTER);

  fill(255,25,255);
  rect (250, 250, 300, 300);
  noStroke();
  fill(255,25,265);
  rect (250, 250, 200, 200);

  line (0, 0, 500, 500);
  line(500, 0, 0, 500);
  ellipseMode (CORNER);

  fill(255,40,285, 50);
  ellipse(250, 250, 250, 250);
  stroke (221,255,51);
  fill(255,80,300, 100);
  ellipse(250, 250, 200, 200);
  ellipse(250, 250, 150, 150);

}


/**
Description of draw()
*/
function draw() {

}
