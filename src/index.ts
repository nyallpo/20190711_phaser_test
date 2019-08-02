import './assets/css/index.scss'

import constants from './constants'
import Boot from './scenes/Boot'
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
  zoom: 4,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  pixelArt: true,
  scene: [Boot, Scene1, Scene2]
}

window.onload = () => {
  new Phaser.Game(config)
}
