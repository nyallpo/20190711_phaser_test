import roaPng from '../assets/roa.png'
import roaAtlas from '../assets/roa.atlas'

// Texture key
const KEY = 'roa'

export default class Roa extends Phaser.Physics.Arcade.Sprite {
  static key() {
    return KEY
  }

  static preload(scene) {
    scene.load.atlas(KEY, roaPng, roaAtlas)
  }

  static makeAnims(scene) {
    const walkFrameRate = 8
    const runFrameRate = 15
    const directions = ['up', 'down', 'left', 'right']

    directions.forEach((dir) => {
      const prefix = 'walk_' + dir.slice(0, 1) + '_'
      scene.anims.create({
        key: 'walk_' + dir,
        frames: scene.anims.generateFrameNames(KEY, {prefix, end: 3}),
        frameRate: walkFrameRate,
        repeat: -1,
      })
    })

    directions.forEach((dir) => {
      const prefix = 'run_' + dir.slice(0, 1) + '_'
      scene.anims.create({
        key: 'run_' + dir,
        frames: scene.anims.generateFrameNames(KEY, {prefix, end: 3}),
        frameRate: runFrameRate,
        repeat: -1,
      })
    })

    scene.anims.create({
      key: 'shock',
      delay: 10,
      frames: scene.anims.generateFrameNames(KEY, {prefix: 'shock_', end: 4}),
      repeat: 0
    })
    scene.anims.create({
      key: 'wink',
      delay: 10,
      frames: scene.anims.generateFrameNames(KEY, {prefix: 'wink_', end: 3}),
      repeat: 0
    })
    scene.anims.create({
      key: 'wink_c',
      delay: 10,
      frames: scene.anims.generateFrameNames(KEY, {prefix: 'wink_c_', end: 3}),
      repeat: 0
    })
    scene.anims.create({
      key: 'crouch',
      delay: 50,
      frames: scene.anims.generateFrameNames(KEY, {prefix: 'crouch_', end: 3}),
      repeat: 0
    })
    scene.anims.create({
      key: 'crouch_reverse',
      delay: 50,
      frames: scene.anims.generateFrameNames(KEY, {prefix: 'crouch_', end: 3}).reverse(),
      repeat: 0
    })
  }

}