const game = new Game()

function preload(){
  game.preload()
}
function setup(){
  createCanvas(1100, 600)
}
function draw(){
  game.draw()

  for (let i = bloodParticles.length - 1; i >= 0; i--) {
    bloodParticles[i].update();
    bloodParticles[i].display();
    if (bloodParticles[i].lifespan <= 0) {
      bloodParticles.splice(i, 1);
    }
  }
}
function mouseClicked(){
  game.player.shoot()
}