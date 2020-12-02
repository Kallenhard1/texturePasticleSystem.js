class Particle {
  constructor(pos, img) {
    this.acc = createVector(0, 0);
    let vx = randomGaussian()*0.3;
    let vy = randomGaussian()*0.3-1.0;
    this.pos = pos.copy();
    this.vel = createVector(vx, vy);
    this.lifespan = 100;
    this.r = 12;
    this.img = img;
  }
  
  run() {
    this.render();
    this.update();
  }
  
  applyForce(f) {
    this.acc.add(f);
  }
  
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.lifespan -= 2.5;
    this.acc.mult(0);
  }
  
  render() {
    imageMode(CENTER);
    tint(255, this.lifespan);
    image(img, this.pos.x, this.pos.y);
    //stroke(255, this.lifespan);
    //strokeWeight(2);
    //fill(255, this.lifespan);
    //ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }
  
  IsDead() {
    if(this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}
