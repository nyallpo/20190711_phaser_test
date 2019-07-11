import preload from './preload'
import create from './create'
import update from './update'

export default {
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
  scene: {
    preload,
    create,
    update
  }
}