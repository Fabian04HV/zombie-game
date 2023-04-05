const scoreTexts = document.querySelectorAll(".score")
const highscoreText = document.querySelector(".highscore")
const gameOverScreen = document.querySelector(".game-over-container")
let gameOver = false

class Game{
  constructor(){
    this.player = new Player()
    this.playerImage
    this.score = 0
    // console.log(this.highscore)
    
    
    this.backgroundImage
    
    this.zombies = []
    this.zombieImage

    switch(difficulty){
      case "easy":
        this.spawnInterval = 80; // spawn a zombie every 60 frames
        this.lowestPossibleSpawnInterval = 25
        this.highscore = localStorage.getItem('highscore-easy')
        break;
      case "medium":
        this.spawnInterval = 60
        this.lowestPossibleSpawnInterval = 20
        this.highscore = localStorage.getItem('highscore-medium')
        break;
      case "hard":
        this.spawnInterval = 30
        this.lowestPossibleSpawnInterval = 12
        this.highscore = localStorage.getItem('highscore-hard')
        break;
      case "impossible":
        this.spawnInterval = 20
        this.lowestPossibleSpawnInterval = 8
        this.highscore = localStorage.getItem('highscore-impossible')
        break;
    }
    //this.spawnInterval = 60; // spawn a zombie every 60 frames
    this.spawnIntervalDecrement = 0.035;
    // this.lowestPossibleSpawnInterval = 20
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

    this.zombieExplodeSound
    this.gunSound
    this.playerHurtSound
  }
  preload(){
    // this.playerImage = loadImage("../Top_Down_Survivor/handgun/idle/survivor-idle_handgun_0.png")
    this.playerImage = loadImage("../images/survivor-idle_handgun_00.png")
    this.backgroundImage = loadImage("../images/forest-pack/forest-night.png")
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
  setup(){
    soundFormats('mp3')
    this.zombieExplodeSound = loadSound("../audio/zombie-explode2.mp3")
    this.gunSound = loadSound("../audio/handgun.mp3")
    this.playerHurtSound = loadSound("../audio/man-hurt.mp3")
    this.displayScore()
  }
  draw(){
    // console.log(this.gunSound.volume)
    if(gameOver) {
      gameOverScreen.classList.add("active")
      noLoop()
    }
    else{
      background(this.backgroundImage)
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

      randX = Math.random() * ((width - 200) - 200) + 200;
      randY = Math.random() * ((height - 100) - 300) + 300;



      let randSide = Math.floor(Math.random() * 3)
      let zombie

      switch(randSide){
        case 0: 
          zombie = new Zombie(randX, height + 100) 
          break;
        case 1: 
          zombie = new Zombie(-100, randY) 
          break;
        case 2: 
          zombie = new Zombie(width + 100, randY) 
          break;
      }      
      this.zombies.push(zombie);
    }
    if(this.spawnInterval > this.lowestPossibleSpawnInterval){
      this.spawnInterval -= this.spawnIntervalDecrement;
    }
  }
  displayScore(){
    scoreTexts.forEach(text =>{
      text.innerText = this.score
    })
    highscoreText.innerText = this.highscore
  }
  zombieWalkAnim(){
    if(this.zombieImagesIndex == 17){
      this.zombieImagesIndex = 0
    }
    this.zombieImage = this.zombieImages[this.zombieImagesIndex] 
  }
  setHighScore(){
    if(this.score > this.highscore){
      this.highscore = this.score

      switch(difficulty){
        case 'easy':
          localStorage.setItem('highscore-easy', this.highscore);
          break;
        case "medium":
          localStorage.setItem('highscore-medium', this.highscore);
          break;
        case "hard":
          localStorage.setItem('highscore-hard', this.highscore);
          break;
        case "impossible":
          localStorage.setItem('highscore-impossible', this.highscore);
          break; 
      }
    }
  }
}