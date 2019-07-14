import Phaser from "phaser"
import constants from '../constants'
import tiles from '../assets/basictiles.png'
import roa from '../assets/roa.png'

let player, cursors, cameras

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({key: 'scene1', active: true})
  }

  preload() {
    this.load.image('tiles', tiles)
    this.load.spritesheet('roa', roa, {frameWidth: 16, frameHeight: 16})
  }

  create() {
    const bgColor = Phaser.Display.Color.IntegerToRGB(0x339933)
    cameras = this.cameras.main.setBackgroundColor(bgColor)

    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0,64,64,64,64,64,64,64,64,64,64,64, 0],
      [0,64, 0,64,64,64,64,64,64,64,64,64, 0],
      [0,64,64,64,64, 0,64,64,64,64, 0,64, 0],
      [0,64,64,64,64,64,64,64,64,64,64,64, 0],
      [0,64,64,64,64,64,64,64,64, 0,64,64, 0],
      [0,64,64,64,64, 0,64,64,64,64,64,64, 0],
      [0,64,64,64,64,64,64,64,64,64,64,64, 0],
      [0,64,64,64,64,64,64,64,64,64,64,64, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const map = this.make.tilemap({data: level,tileWidth: 16, tileHeight: 16})
    map.createStaticLayer(0, map.addTilesetImage('tiles'), 0,0).setScale(4.0)

    const platforms = this.physics.add.staticGroup()

    player = this.physics.add.sprite(200, 450, 'roa').setScale(4.0)
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)

    this.createAnims()

    this.physics.add.collider(player, platforms)

    cursors = this.input.keyboard.createCursorKeys()

  }

  update() {
    const walk_or_run = cursors.shift.isDown ? 'run_' : 'walk_'
    const move_speed = cursors.shift.isDown ? constants.RUN_SPEED : constants.WALK_SPEED

    if (cursors.down.isDown) {
      player.setVelocity(0, move_speed)
      player.anims.play(walk_or_run + 'down', true)
    } else if (cursors.up.isDown) {
      player.setVelocity(0, -move_speed)
      player.anims.play(walk_or_run + 'up', true)
    } else if (cursors.left.isDown) {
      player.setVelocity(-move_speed, 0)
      player.anims.play(walk_or_run + 'left', true)
    } else if (cursors.right.isDown) {
      player.setVelocity(move_speed, 0)
      player.anims.play(walk_or_run + 'right', true)
    } else {
      player.anims.stop()
      player.setVelocity(0)
    }

    if (cursors.space.isDown) {
      this.scene.start('scene2')
    }
  }

  createAnims() {
    const walkFrameRate = 8
    this.anims.create({
      key: 'walk_down',
      frames: this.anims.generateFrameNumbers('roa', {start: 0, end: 3}),
      frameRate: walkFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'walk_up',
      frames: this.anims.generateFrameNumbers('roa', {start: 4, end: 7}),
      frameRate: walkFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'walk_left',
      frames: this.anims.generateFrameNumbers('roa', {start: 8, end: 11}),
      frameRate: walkFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'walk_right',
      frames: this.anims.generateFrameNumbers('roa', {start: 12, end: 15}),
      frameRate: walkFrameRate,
      repeat: -1,
    })

    const runFrameRate = 15
    this.anims.create({
      key: 'run_down',
      frames: this.anims.generateFrameNumbers('roa', {start: 16, end: 19}),
      frameRate: runFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'run_up',
      frames: this.anims.generateFrameNumbers('roa', {start: 20, end: 23}),
      frameRate: runFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'run_left',
      frames: this.anims.generateFrameNumbers('roa', {start: 24, end: 27}),
      frameRate: runFrameRate,
      repeat: -1,
    })
    this.anims.create({
      key: 'run_right',
      frames: this.anims.generateFrameNumbers('roa', {start: 28, end: 31}),
      frameRate: runFrameRate,
      repeat: -1,
    })

    this.anims.create({
      key: ''
    })
  }
}