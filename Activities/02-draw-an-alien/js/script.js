/**
Title of Project: Alien
Author Name: Suzana Burlea
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
  createCanvas (640, 480);

  background (255, 87, 238);

  noStroke();

  //draw wings
  fill(140, 25, 255, 90);
  ellipse(320, 0, 600, 400);

  //draw body
  fill(178,190,181);
  ellipse(320, 0, 400, 500);

  //draw head
  fill(143,153,146);
  ellipse(320, 280, 120, 320);

  //draw eyes

  fill(0);
  ellipse(290, 330, 40, 115);
  fill(0);
  ellipse(350, 330, 40, 115);

  //draw nostrils
  fill(0);
  ellipse(310, 235, 10, 10);
  fill(0);
  ellipse(330, 235, 10, 10);

  //draw mouth
  stroke(255,51,85);
  strokeWeight(10);
  rectMode(CENTER);
  rect(320, 200, 80, 20);

  //draw teeth
  fill(255,247,230);
  noStroke();
  rect(310, 175, 7, 60);
  fill(255,247,230);
  rect(330, 175, 7, 60);




}


/**
Description of draw()
*/
function draw() {

}
