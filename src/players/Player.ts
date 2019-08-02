import roaPng from '../assets/roa.png'
import roaAtlas from '../assets/roa.atlas'
import Keys from './Keys'
import constants from '../constants'

export default class Player {
  static readonly KEY = 'roa'
  sprite: Phaser.Physics.Arcade.Sprite
  direction: Direction = Direction.down

  static preload(scene) {
    scene.load.atlas(this.KEY, roaPng, roaAtlas)
  }

  static makeAnims(scene) {
    const directions = ['up', 'down', 'left', 'right']
    const move_configs = [
      {prefix: 'walk_', frameRate: 8},
      {prefix: 'run_', frameRate: 15},
    ]
    move_configs.forEach((mov) => {
      directions.forEach((dir) => {
        const prefix = mov.prefix + dir.slice(0, 1) + '_'
        scene.anims.create({
          key: mov.prefix + dir,
          frames: scene.anims.generateFrameNames(this.KEY, {prefix, end: 3}),
          frameRate: mov.frameRate,
          repeat: -1,
        })
      })
    })
    const other_configs = [
      {key: 'emo_shock', delay: 10, frames: scene.anims.generateFrameNames(this.KEY, {prefix: 'shock_', end: 4})},
      {key: 'emo_wink', delay: 10, frames: scene.anims.generateFrameNames(this.KEY, {prefix: 'wink_', end: 3})},
      {key: 'emo_wink_c', delay: 10, frames: scene.anims.generateFrameNames(this.KEY, {prefix: 'wink_c_', end: 3})},
      {key: 'emo_crouch', delay: 50, frames: scene.anims.generateFrameNames(this.KEY, {prefix: 'crouch_', end: 3})},
      {
        key: 'emo_crouch_reverse',
        delay: 50,
        frames: scene.anims.generateFrameNames(this.KEY, {prefix: 'crouch_', end: 3}).reverse()
      }
    ]
    other_configs.forEach((h) => {
      scene.anims.create(h)
    })
  }

  constructor(scene, x, y) {
    this.sprite = scene.physics.add.sprite(x, y, Player.KEY)
    this.sprite.setBounce(0.2)
    this.sprite.setCollideWorldBounds(true)
  }

  wait() {
    // walkアニメーションの最初のフレームを再生してすぐ止める
    let key = 'walk_' + this.direction
    this.sprite.anims.play(key)
    this.sprite.anims.stop()
    this.sprite.setVelocity(0, 0)
  }

  move(keys: Keys) {
    const walk_or_run = keys.pressShift() ? 'run_' : 'walk_'
    const move_speed = keys.pressShift() ? constants.RUN_SPEED : constants.WALK_SPEED

    if (keys.pressDown()) {
      this.sprite.setVelocity(0, move_speed)
      this.direction = Direction.down
    } else if (keys.pressUp()) {
      this.sprite.setVelocity(0, -move_speed)
      this.direction = Direction.up
    } else if (keys.pressLeft()) {
      this.sprite.setVelocity(-move_speed, 0)
      this.direction = Direction.left
    } else if (keys.pressRight()) {
      this.direction = Direction.right
      this.sprite.setVelocity(move_speed, 0)
    }
    this.sprite.anims.play(walk_or_run + this.direction, true)
  }
}

type Direction = string
let Direction = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
}
