class Bullet{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 20
    this.height = 20
  }
  draw(){
    fill("yellow")
    circle(100, 100, 10)
    console.log("shooooot")
  }
}