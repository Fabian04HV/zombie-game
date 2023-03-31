const game = new Game()

function preload(){
  game.preload()
}
function setup(){
  createCanvas(1200, 700)
  background("#101111")
}
function draw(){
  game.draw()
}