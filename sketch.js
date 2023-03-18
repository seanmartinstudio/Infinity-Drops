
let circleSize = 100

// const R = random(255);
// const G = random(255);
// const B = random(255);


function setup() {
  createCanvas(800, 800);
  background(0);
}

function createCircle() {
  noStroke
  circle(random(0, width), random(0, height), circleSize)
  fill(255)
  circleSize = circleSize + 50
}

function draw() {
  noStroke
  frameRate(24)
  fill(25,90,70)
  circle(width/2, height/2, circleSize)
  circleSize = circleSize + 5

  fill(70,20,90)
  circle(width/4, height/4, circleSize)
  circleSize = circleSize + 1

  //give the elipse a random variable for x,y location
  //give the elipse a random starting side
  //give the elipse a random color
  //create logic for elipse to grow in width untill it is larger than the canvas
  //Outcome should be randomized "color water" droplets hitting the screen and then growing in size
}
