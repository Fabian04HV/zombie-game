class Player{
  constructor(){
    this.x = 300 
    this.y = 300
    this.width = 100
    this.height = 100
  }
  draw(){
    image(game.playerImage, this.x, this.y, this.width, this.height)
  }
}