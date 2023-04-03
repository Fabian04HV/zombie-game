const game = new Game()
let crosshairImg;


function preload(){
  game.preload()
  crosshairImg = loadImage('../images/red-crosshair-transparent-bg.png');
}
function setup(){
  createCanvas(1200, 700)
  // noCursor()
  game.spawnZombies()
}
function draw(){
  game.draw()
  // image(crosshairImg, mouseX, mouseY, 20, 20);
  // cursor('none');
}
function mouseClicked(){
  game.player.shoot()
}