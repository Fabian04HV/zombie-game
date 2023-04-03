class Zombie{
  constructor(x, y){
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
  }
  draw(){
    this.facePlayer()
    this.followPlayer()
  }
  facePlayer(){
    let dx = game.player.x - this.x 
    let dy = game.player.y - this.y
    let angle = atan2(dy, dx)
    push()
    translate(this.x + this.width / 2, this.y + this.height / 2)
    rotate(angle)
    image(game.zombieImage, -this.width / 2, -this.height / 2, this.width, this.height)
    pop()
  }
  followPlayer() {
    const speed = 2
    const dx = game.player.x + game.player.width/2 - this.x - this.width / 2
    const dy = game.player.y + game.player.height/2 - this.y - this.height / 2
    const angle = atan2(dy, dx)
    const vx = cos(angle) * speed
    const vy = sin(angle) * speed
    this.x += vx
    this.y += vy
  } 
}