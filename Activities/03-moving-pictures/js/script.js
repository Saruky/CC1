/**
Activity 3: The Moving Pictures
Suzana Burlea

Two circles, the left one bigger and more transparent than the right, come in from either side of the screen, growing as they do so. They stop in the centre while still growing. The background goes from black to red.


*/
"use strict";

function preload() {
}
//Define objects: background and circles
let bg = {
  r : 0,
  g : 20,
  b : 19
};

let circleA = {
  x : 0,
  y : 350,
  size: 350,
  speed: 3,
  growthRate: 2,
  fill: 215,
  alpha: 200
};

let circleB = {
  x : 500,
  y : 350,
  size: 170,
  sizeRatio: 0.5,
  speed: -3,
  fill: 35,
  alpha: 150
};

function setup() {
  createCanvas (windowWidth, windowHeight);
  circleB.x = width;
  circleB.y = height/2;
  circleA.y = height/2;
  noStroke();
}
/**
Description of draw()
*/
//Setting the Background: using r, g, b
function draw() {

  background(bg.r, bg.g, bg.b);
  bg.r = map (circleA.size, 350, 500, 0, 200);
  bg.g += 1;
  bg.g = constrain(bg.g, 0, 88);
  bg.b += 1;
  bg.b = constrain(bg.g, 0, 38);


// Draw a square in the centre of the canvas
  rectMode(CENTER);
  fill(229, 160, 225, 200);
  rect(width/2, height/2, 1050, 550);

//Draw moving circle A
  circleA.x +=circleA.speed;
  circleA.x = constrain (circleA.x, 0, width/2);
  circleA.size +=circleA.growthRate;
  circleA.size = constrain (circleA.size, 0, 550);
  fill(circleA.fill, circleA.alpha);
  ellipse(circleA.x,circleA.y,circleA.size);


//Draw moving circle B
//Add negative 1 to x!
  circleB.x +=circleB.speed;
  circleB.x = constrain (circleB.x, width/2, width);
  circleB.size =circleA.size * circleB.sizeRatio;
  fill(circleB.fill, circleB.alpha);
  ellipse(circleB.x,circleB.y,circleB.size);
}
