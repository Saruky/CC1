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
//Define objects: background and circles
let bg = {
  r : 15,
  g : 20,
  b : 19
};

let circleA = {
  x : 0,
  y : 350,
  size: 350,
  speed: 3,
  growthRate: 2,
  fill: 200,
  alpha: 200
};

let circleB = {
  x : 500,
  y : 350,
  size: 400,
  sizeRatio: 0.85,
  speed: -3,
  fill: 35,
  alpha: 150
};
let circleC = {
  x : 10,
  y : 10,
  size: 30,
  r: 119,
  g: 212,
  b: 159,
  alpha: 150
};

let ellipse1 = {
  x : 750,
  y : 350,
  w: 565,
  h: 350,
  speed: -3,
  growthRate: 3.5,
  r: 229,
  g: 212,
  b: 159,
  alpha: 150
}

let rectangle1 = {
  x: 990,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle2 = {
  x: 60,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle3 = {
  x: 120,
  y: 0,
  w: 10,
  h: 70,
  speed: 2,
  r: 179,
  g: 222,
  b: 59
}
let rectangle4 = {
  x: 180,
  y: 0,
  w: 10,
  h: 70,
  speed: 1,
  r: 179,
  g: 222,
  b: 59
}
let rectangle5 = {
  x: 230,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle6 = {
  x: 350,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle7 = {
  x: 750,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle8 = {
  x: 440,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 202,
  b: 159
}
let rectangle9 = {
  x: 920,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}
let rectangle10 = {
  x: 1090,
  y: 0,
  w: 10,
  h: 70,
  speed: 1,
  r: 179,
  g: 222,
  b: 59
}
let rectangle11 = {
  x: 1195,
  y: 0,
  w: 10,
  h: 70,
  speed: 3,
  r: 179,
  g: 222,
  b: 59
}



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
  bg.r = map (circleA.size, 350, 500, 0, 20);
  bg.g += 1;
  bg.g = constrain(bg.g, 3, 18);
  bg.b += 1;
  bg.b = constrain(bg.g, 10, 38);


// Draw a square in the centre of the canvas
  rectMode(CENTER);
  fill(229, 160, 225, 200);
  rect(width/2, height/2, 1050, 550);

//Draw little random moving rectangles:
  rectangle1.y = random (0,height);
  fill(rectangle1.r, rectangle1.g, rectangle1.b);
  rect(rectangle1.x, rectangle1.y, rectangle1.w, rectangle1.h);

  rectangle2.y = random (0,height);
  fill(rectangle2.r, rectangle2.g, rectangle2.b);
  rect(rectangle2.x, rectangle2.y, rectangle2.w, rectangle2.h);

  rectangle3.y = random (0,height);
  fill(rectangle3.r, rectangle3.g, rectangle3.b);
  rect(rectangle3.x, rectangle3.y, rectangle3.w, rectangle3.h);

  rectangle4.y = random (0,height);
  fill(rectangle4.r, rectangle4.g, rectangle4.b);
  rect(rectangle4.x, rectangle4.y, rectangle4.w, rectangle4.h);

  rectangle5.y = random (0,height);
  fill(rectangle5.r, rectangle5.g, rectangle5.b);
  rect(rectangle5.x, rectangle5.y, rectangle5.w, rectangle5.h);

  rectangle6.y = random (0,height);
  fill(rectangle6.r, rectangle6.g, rectangle6.b);
  rect(rectangle6.x, rectangle6.y, rectangle6.w, rectangle6.h);
7
  rectangle7.y = random (0,height);
  fill(rectangle7.r, rectangle7.g, rectangle7.b);
  rect(rectangle7.x, rectangle7.y, rectangle7.w, rectangle7.h);

  rectangle8.y = random (0,height);
  fill(rectangle8.r, rectangle8.g, rectangle8.b);
  rect(rectangle8.x, rectangle8.y, rectangle8.w, rectangle8.h);

  rectangle9.y = random (0,height);
  fill(rectangle9.r, rectangle9.g, rectangle9.b);
  rect(rectangle9.x, rectangle9.y, rectangle9.w, rectangle9.h);

  rectangle10.y = random (0,height);
  fill(rectangle10.r, rectangle10.g, rectangle10.b);
  rect(rectangle10.x, rectangle10.y, rectangle10.w, rectangle10.h);

  rectangle11.y = random (0,height);
  fill(rectangle11.r, rectangle11.g, rectangle11.b);
  rect(rectangle11.x, rectangle11.y, rectangle11.w, rectangle11.h);

//Draw moving circle A
  circleA.x +=circleA.speed;
  circleA.x = constrain (circleA.x, 0, 875);
  circleA.size +=circleA.growthRate;
  circleA.size = constrain (circleA.size, 0, 550);
  circleA.fill = random (180, 200);
  fill(circleA.fill, circleA.alpha);
  ellipse(circleA.x,circleA.y,circleA.size);


//Draw moving circle B
//Add negative 1 to x!
  circleB.x +=circleB.speed;
  circleB.x = constrain (circleB.x, width/2, width);
  circleB.size =circleA.size * circleB.sizeRatio;
  fill(circleB.fill, circleB.alpha);
  ellipse(circleB.x,circleB.y,circleB.size);

//Drawing moving circleC
  circleC.x =mouseX-40;
  circleC.y = mouseY-10;
  fill(circleC.r, circleC.g, circleC.b, circleC.alpha);
  circleC.size = mouseY-10;
  circleC.size = constrain (circleC.size, 0, 450);
  ellipse(circleC.x,circleC.y,circleC.size);

//Draw moving ellipse1
  ellipse1.x +=ellipse1.speed;
  ellipse1.y =height/2;
  ellipse1.x = constrain (ellipse1.x, 410, width);
  fill(ellipse1.r, ellipse1.g, ellipse1.b, ellipse1.alpha);
  ellipse(ellipse1.x, ellipse1.y, ellipse1.w, ellipse1.h);


}
