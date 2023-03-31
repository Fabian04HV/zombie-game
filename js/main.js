const game = new Game()

function preload(){
  game.preload()
}
function setup(){
  createCanvas(1200, 700)
}
function draw(){
  game.draw()
}
function mouseClicked(){
  game.player.shoot()
}