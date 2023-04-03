let cursorPosition = []
class Bullet{
  constructor(x, y, size, goal){
    this.x = x
    this.y = y
    this.goal = goal
    this.size = size
    this.speed = 15
    this.angle = atan2(this.goal[1] - this.y, this.goal[0] - this.x); // calculate the angle between the bullet and its goal
  
  }
  draw(){
    fill("white")
    stroke("cornflowerblue")
    strokeWeight(3)
    circle(this.x, this.y, this.size)

    // calculate the bullet's movement based on its angle
    this.x += cos(this.angle) * this.speed;
    this.y += sin(this.angle) * this.speed;

    // check if the bullet is off-screen and remove it if necessary
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      const index = game.player.bullets.indexOf(this);
      game.player.bullets.splice(index, 1);
    }

     // check for collision with zombies
     for (let i = 0; i < game.zombies.length; i++) {
      const zombie = game.zombies[i];
      if (this.collision(zombie)) {
        // remove bullet
        const index = game.player.bullets.indexOf(this);
        game.player.bullets.splice(index, 1);
        // remove zombie
        game.zombies.splice(i, 1);
        // exit loop, because bullet can only hit one zombie
        break;
      }
    }
  }
  collision(zombieInfo){
    let bulletX = this.x// + this.width / 2
    let bulletY = this.y// + this.height / 2

    let zombieX = zombieInfo.x + (zombieInfo.width / 2)
    let zombieY = zombieInfo.y + (zombieInfo.height / 2)

    let distance = dist(bulletX, bulletY, zombieX, zombieY)
    console.log(distance)
    if(distance <= 50){
      return true
    }
    return false
  }
}