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
  
      this.zombies.forEach(zombie =>{
        zombie.draw()
      })
    }
  }
  spawnZombies(){
    setInterval(function(){
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
      game.zombies.push(zombie)
    }, 1000)
  }
  displayScore(){
    scoreTexts.forEach(text =>{
      text.innerText = this.score
    })
  }
}