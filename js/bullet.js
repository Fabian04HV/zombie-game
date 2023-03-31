class Bullet{
  constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
  }
  draw(){
    fill("yellow")
    stroke("black")
    circle(this.x, this.y, this.size)
    console.log("shoot")
    this.updatePosition()
  }
  updatePosition(){
    //gradually update the bullets position
    //to move towards the cursor position
    let cursorPosition = [mouseX, mouseY]
    console.log(cursorPosition)
  }
}