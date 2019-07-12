import Phaser from 'phaser'
import Scene1 from './scenes/Scene1'
import constants from './constants'

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: constants.SCREEN_X,
  height: constants.SCREEN_Y,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  antialias: false,
  scene: [Scene1]
}

const game = new Phaser.Game(config)

