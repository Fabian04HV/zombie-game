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

    this.spawnInterval = 60; // spawn a zombie every 60 frames
    this.spawnIntervalDecrement = 0.035;
    this.lastSpawnFrame = 0;


    this.zombieImagesIndex = 0
    this.zombieImages = [
      this.zombieImage0,
      this.zombieImage1,
      this.zombieImage2,
      this.zombieImage3,
      this.zombieImage4,
      this.zombieImage5,
      this.zombieImage6,
      this.zombieImage7,
      this.zombieImage8,
      this.zombieImage9,
      this.zombieImage10,
      this.zombieImage11,
      this.zombieImage12,
      this.zombieImage13,
      this.zombieImage14,
      this.zombieImage15,
      this.zombieImage16
    ]
    

  }
  preload(){
    this.playerImage = loadImage("../Top_Down_Survivor/handgun/idle/survivor-idle_handgun_0.png")
    
    this.zombieImage = loadImage("../images/zombie-walking.gif")

    this.zombieImages[0] = loadImage("../images/export/skeleton-move_0.png")
    this.zombieImages[1] = loadImage("../images/export/skeleton-move_1.png")
    this.zombieImages[2] = loadImage("../images/export/skeleton-move_2.png")
    this.zombieImages[3] = loadImage("../images/export/skeleton-move_3.png")
    this.zombieImages[4] = loadImage("../images/export/skeleton-move_4.png")
    this.zombieImages[5] = loadImage("../images/export/skeleton-move_5.png")
    this.zombieImages[6] = loadImage("../images/export/skeleton-move_6.png")
    this.zombieImages[7] = loadImage("../images/export/skeleton-move_7.png")
    this.zombieImages[8] = loadImage("../images/export/skeleton-move_8.png")
    this.zombieImages[9] = loadImage("../images/export/skeleton-move_9.png")
    this.zombieImages[10] = loadImage("../images/export/skeleton-move_10.png")
    this.zombieImages[11] = loadImage("../images/export/skeleton-move_11.png")
    this.zombieImages[12] = loadImage("../images/export/skeleton-move_12.png")
    this.zombieImages[13] = loadImage("../images/export/skeleton-move_13.png")
    this.zombieImages[14] = loadImage("../images/export/skeleton-move_14.png")
    this.zombieImages[15] = loadImage("../images/export/skeleton-move_15.png")
    this.zombieImages[16] = loadImage("../images/export/skeleton-move_16.png")
  }
  draw(){
    if(gameOver) {
      gameOverScreen.classList.add("active")
      noLoop()
    }
    else{
      background("#101111")

      if(frameCount % 4 == 0){
        this.zombieImagesIndex++
      }
      this.zombieWalkAnim()
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
    if(this.spawnInterval > 20){
      this.spawnInterval -= this.spawnIntervalDecrement;
    }
  }
  displayScore(){
    scoreTexts.forEach(text =>{
      text.innerText = this.score
    })
  }
  zombieWalkAnim(){
    if(this.zombieImagesIndex == 17){
      this.zombieImagesIndex = 0
    }
    this.zombieImage = this.zombieImages[this.zombieImagesIndex] 
  }
}