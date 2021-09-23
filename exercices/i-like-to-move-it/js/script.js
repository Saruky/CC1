/**
I like to Move It Activity
Suzana Burlea

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
let backgroundshade = 49;
let circle = {
  size : 250,
  x : 0,
  y : 125,
  speed : 1};


function setup() {
  createCanvas (windowWidth, windowHeight);
}

/**
Description of draw()
*/
function draw() {
  noStroke();
  background(backgroundshade);

// Draw a square in the centre of the canvas
  rectMode(CENTER);
  fill(129, 150, 49);
  rect(width/2, height/2, 550, 450);

  fill(129, 54, 49);
  ellipse(circle.x,circle.y,circle.size);
  circle.x += circle.speed;
  circle.speed = circle.speed  + 0.5;



}
