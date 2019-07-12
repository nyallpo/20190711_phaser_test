import Phaser from 'phaser'
import Scene1 from './scenes/Scene1'

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: true
    }
  },
  antialias: false,
  scene: [Scene1]
}

const game = new Phaser.Game(config)

