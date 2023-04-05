let bloodParticles = [];

class BloodParticle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-5, 5), random(-5, 5));
    this.size = random(5, 15);
    this.color = color(135, 0, 20);
    this.lifespan = 35;
  }

  update() {
    this.vel.mult(.97);
    this.pos.add(this.vel);
    this.lifespan -= 2;
  }

  display() {
    noStroke();
    fill(this.color)
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

function createBloodSplash(x, y) {
  for (let i = 0; i < 50; i++) {
    bloodParticles.push(new BloodParticle(x, y));
  }
}

// function draw() {
//   // your game code here

//   // update and display blood particles
//   for (let i = bloodParticles.length - 1; i >= 0; i--) {
//     bloodParticles[i].update();
//     bloodParticles[i].display();
//     if (bloodParticles[i].lifespan <= 0) {
//       bloodParticles.splice(i, 1);
//     }
//   }
// }