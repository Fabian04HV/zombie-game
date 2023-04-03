let cursorPosition = []
class Bullet{
  constructor(x, y, size, goal){
    this.x = x
    this.y = y
    this.goal = goal
    this.size = size
    this.speed = 8
    this.angle = atan2(this.goal[1] - this.y, this.goal[0] - this.x); // calculate the angle between the bullet and its goal
  
  }
  draw(){
    fill("yellow")
    stroke("black")
    circle(this.x, this.y, this.size)

    // calculate the bullet's movement based on its angle
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    // check if the bullet is off-screen and remove it if necessary
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      const index = game.player.bullets.indexOf(this);
      game.player.bullets.splice(index, 1);
    }
  }
}