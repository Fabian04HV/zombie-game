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
    let dx = game.player.x - this.x - this.width / 2;
    let dy = game.player.y - this.y - this.height / 2; 
    let angle = atan2(dy, dx);
    push();
    translate(this.x + this.width / 2, this.y + this.height / 2);
    rotate(angle);
    image(game.zombieImage, -this.width / 2, -this.height / 2, this.width, this.height);
    pop();
  }
  followPlayer(){
    let playerPosition = [game.player.x, game.player.y]
    
  }
}