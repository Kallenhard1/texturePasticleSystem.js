class ParticleSystem {
  constructor(num, v, img) {
    this.particles = []; //Initialize the Array of Particles.
    this.origin = v.copy(); //Store the origin point.
    this.img = img;
    for(let i = 0; i < num; i++) {
      this.particles.push(new Particle(this.origin, this.img));
    }
  }
  
  run() {
    for(let particle of this.particles) {
      particle.run();
    }
    this.particles = this.particles.filter(particle => !particle.IsDead());
  }
  
  applyForce(dir) {
    for(let particle of this.particles) {
      particle.applyForce(dir);
    }
  }
  
  addParticle() {
    this.particles.push(new Particle(this.origin, this.img));
  }
  
}
