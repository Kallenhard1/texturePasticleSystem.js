let ps;
let img;

function preload() {
  img = loadImage("data/texture.png");
}

function setup() {
  createCanvas(400, 400);
  ps = new ParticleSystem(0, createVector(width/2, height -75), img);
}

function draw() {
  background(0);
  //Control the direction of wind, through the mouse.
  let dx = map(mouseX, 0, width, -0.2, 0.2);
  let wind = createVector(dx, 0);
  ps.applyForce(wind);
  ps.run();
  for(let i = 0; i < 2; i++) {
    ps.addParticle();
  }
  
  //drawVector(wind, createVector(width/2, 50, 0), 500);
}
//Now just left draw the vector (wind).

