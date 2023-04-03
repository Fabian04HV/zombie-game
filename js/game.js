class Game{
  constructor(){
    this.player = new Player()
    this.zombies = []
    this.playerImage
    this.zombieImage

    this.zombie = new Zombie()
  }
  preload(){
    this.playerImage = loadImage("../Top_Down_Survivor/handgun/idle/survivor-idle_handgun_0.png")
    this.zombieImage = loadImage("../images/export/skeleton-attack_0.png")
  }
  draw(){
    background("#101111")
    this.player.draw()

    this.zombies.forEach(zombie =>{
      zombie.draw()
    })
  }
  spawnZombies(){
    setInterval(function(){
      let randX = Math.floor(Math.random() * (width - 0) + 0)

      const zombie = new Zombie(randX, 0)
      game.zombies.push(zombie)
      console.log("zombie spawned")
    }, 1000)
  }
}