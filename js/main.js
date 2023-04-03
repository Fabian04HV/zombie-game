const game = new Game()
let crosshairImg

function preload(){
  game.preload()
  crosshairImg = loadImage('../images/red-crosshair-transparent-bg.png');
}
function setup(){
  createCanvas(1200, 700)
  noCursor()
  imageMode(CENTER)
  game.spawnZombies()
}
function draw(){
  game.draw()

  image(crosshairImg, mouseX, mouseY, 40, 40);
  
  // Change the cursor to the crosshair image
  cursor('none');
}
function mouseClicked(){
  game.player.shoot()
}