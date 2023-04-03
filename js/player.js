class Player{
  constructor(){
    this.x = 550
    this.y = 300
    this.width = 100
    this.height = 100
    this.bullets = []
  }
  aim() {
    //rotate the player towards cursor position
    let dx = mouseX - this.x - this.width / 2;
    let dy = mouseY - this.y - this.height / 2; 
    let angle = atan2(dy, dx);
    push();
    translate(this.x + this.width / 2, this.y + this.height / 2);
    rotate(angle);
    image(game.playerImage, -this.width / 2, -this.height / 2, this.width, this.height);
    pop();
  }
  shoot(){
    cursorPosition = [mouseX, mouseY]
    const bullet = new Bullet(this.x + this.width / 2, this.y + this.height / 2, 10, cursorPosition);
    this.bullets.push(bullet); // add bullet to array
  }
  draw(){
    this.aim();
    this.bullets.forEach(bullet =>{
      bullet.draw()
    })
  }
}