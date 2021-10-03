/**
Activity 3: The Moving Pictures
Suzana Burlea

Two circles, the left one bigger and more transparent than the right, come in from either side of the screen, growing as they do so. They stop in the centre while still growing. The background goes from black to red.


*/
"use strict";

function preload() {

}
let backgroundshade = 230;


let circleA = {
  size : 350,
  x : 1000,
  y : 305,
  speed : 2.5,
  fill:(47, 196, 255, 122)
};
let circleB = {
  size : 90,
  x : 0,
  y : 305,
  speed : 7,
  fill: 169
};


function setup() {
  createCanvas (windowWidth, windowHeight);
}

/**
Description of draw()
*/
function draw() {
  noStroke();

  background(backgroundshade);
  backgroundshade = constrain(backgroundshade, 10, 190);
  backgroundshade += 1;


// Draw a square in the centre of the canvas
  rectMode(CENTER);
  fill(129, 150, 49);
  rect(width/2, height/2, 750, 500);

//Draw moving circle A
  circleA.fill = random(103, 205);
  circleA.x = constrain(circleA.x, width, width/2);
  fill(circleA.fill);

  ellipse(circleA.x,circleA.y,circleA.size);
  circleA.speed = -5;
  circleA.x += circleA.speed;


//Draw moving circle B
  circleB.fill = map(circleB.x, 0, width, 0, 133);
  circleB.x = constrain(circleB.x, 0, width/2);
  fill(circleB.fill);

  ellipse(circleB.x,circleB.y,circleB.size);
  circleB.x += circleB.speed;

}
//Draw moving circle B
