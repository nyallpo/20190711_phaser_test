import './assets/css/main.scss'

import constants from './constants'
import Scene1 from './scenes/Scene1'
import Scene2 from './scenes/Scene2'

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: constants.SCREEN_X,
  height: constants.SCREEN_Y,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: true
    }
  },
  antialias: false,
  scene: [Scene1, Scene2]
}

window.onload = () => {
  new Phaser.Game(config)
}
