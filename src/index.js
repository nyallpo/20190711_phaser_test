import './assets/css/index.scss'

import Phaser from 'phaser'
import constants from './constants'
import Scene1 from './scenes/Scene1'
import Scene2 from './scenes/Scene2'

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#999',
  parent: "game",
  width: constants.SCREEN_X,
  height: constants.SCREEN_Y,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  pixelArt: true,
  scene: [Scene1, Scene2]
}

window.onload = () => {
  new Phaser.Game(config)
}
