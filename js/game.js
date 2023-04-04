const scoreTexts = document.querySelectorAll(".score")
const gameOverScreen = document.querySelector(".game-over-container")
let gameOver = false

class Game{
  constructor(){
    this.player = new Player()
    this.zombies = []
    this.playerImage
    this.zombieImage
    this.score = 0

    this.spawnInterval = 60; // spawn a zombie every 120 frames
    this.spawnIntervalDecrement = 0.05; // decrease spawn interval by 0.5 frames every frame
    this.lastSpawnFrame = 0;
  }
  preload(){
    this.playerImage = loadImage("../Top_Down_Survivor/handgun/idle/survivor-idle_handgun_0.png")
    this.zombieImage = loadImage("../images/export/skeleton-attack_0.png")
  }
  draw(){
    if(gameOver) {
      gameOverScreen.classList.add("active")
      noLoop()
    }
    else{
      background("#101111")
      this.player.draw()
      this.spawnZombies()
      this.zombies.forEach(zombie =>{
        zombie.draw()
      })
    }
  }
  spawnZombies(){
    if (frameCount - this.lastSpawnFrame >= this.spawnInterval) {
      this.lastSpawnFrame = frameCount;
      let randX = Math.floor(Math.random() * width)
      let randY = Math.floor(Math.random() * height)

      let randSide = Math.floor(Math.random() * 4)
      let zombie

      switch(randSide){
        case 0:
          zombie = new Zombie(randX, 0) 
          break;
        case 1: 
          zombie = new Zombie(randX, height - 100) 
          break;
        case 2: 
          zombie = new Zombie(0, randY) 
          break;
        case 3: 
          zombie = new Zombie(width - 100, randY) 
          break;
      }      
      this.zombies.push(zombie);
    }
    if(this.spawnInterval > 12){
      this.spawnInterval -= this.spawnIntervalDecrement;
    }
    console.log(this.spawnInterval)
  }
  displayScore(){
    scoreTexts.forEach(text =>{
      text.innerText = this.score
    })
  }
}