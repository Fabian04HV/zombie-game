const healthText = document.getElementById("health")
class Player{
  constructor(){
    this.x = 550
    this.y = 300
    this.width = 100
    this.height = 100
    this.bullets = []
    this.health = 3
    this.redTint = false
    this.momentOfDamage 
  }
  aim() {
    //rotate the player towards cursor position
    let dx = mouseX - this.x - this.width / 2;
    let dy = mouseY - this.y - this.height / 2; 
    let angle = atan2(dy, dx);
    push();
    translate(this.x + this.width / 2, this.y + this.height / 2);
    rotate(angle);
    if(this.redTint){
      tint(255, 0 , 0)
    }
    image(game.playerImage, -this.width / 2, -this.height / 2, this.width, this.height);
    if(!this.redTint){
      noTint()
    }
    if(frameCount >= this.momentOfDamage + 20){
      this.redTint = false
    }
    pop();
  }
  shoot(){
    cursorPosition = [mouseX, mouseY]
    const bullet = new Bullet(this.x + this.width / 2, this.y + this.height / 2, 10, cursorPosition);
    this.bullets.push(bullet); // add bullet to array
  }
  checkForBite(){
    const playerX = this.x + (this.width / 2)
    const playerY = this.y + (this.height / 2)

    game.zombies.forEach((zombie) =>{
      let zombieX = zombie.x + (zombie.width / 2)
      let zombieY = zombie.y + (zombie.height / 2)
      let distance = dist(zombieX, zombieY, playerX, playerY)
      if(distance <= 30){
        game.zombies.splice(game.zombies.indexOf(zombie), 1)

        this.receiveDamage()
        this.checkForGameOver()
      }
    })
  }
  receiveDamage(){
    game.player.health--
      
    this.redTint = true 
    this.momentOfDamage = frameCount

    let currentHealth = healthText.innerText
    let healthMinusOne = currentHealth.slice(0, -1)
    healthText.innerText = healthMinusOne
  }
  checkForGameOver(){
    if(game.player.health <= 0){
      gameOver = true
    }
  }
  draw(){
    this.aim();
    this.bullets.forEach(bullet =>{
      bullet.draw()
    })
    this.checkForBite()
  }
}