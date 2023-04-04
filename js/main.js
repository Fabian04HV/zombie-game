const game = new Game()
let crosshairImg;


function preload(){
  game.preload()
  crosshairImg = loadImage('../images/red-crosshair-transparent-bg.png');
}
function setup(){
  createCanvas(1200, 700)
  // game.spawnZombies(1000)
}
function draw(){
  game.draw()
}
function mouseClicked(){
  game.player.shoot()
}