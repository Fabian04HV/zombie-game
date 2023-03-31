class Game{
  constructor(){
    this.player = new Player()
    this.playerImage
  }
  preload(){
    this.playerImage = loadImage("../Top_Down_Survivor/handgun/idle/survivor-idle_handgun_0.png")
  }
  draw(){
    this.player.draw()
  }
}