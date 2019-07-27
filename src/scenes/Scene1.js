import Phaser from "phaser"
import constants from '../constants'
import Roa from '../players/Roa'
let player, cursors, cameras

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({key: 'scene1'})
  }

  preload() {
    console.log('Scene1 preload')
  }

  create() {
    Roa.makeAnims(this)
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

    player = new Roa(this, 400, 200)
    console.log(player)

    this.physics.add.collider(player, platforms)

    cursors = this.input.keyboard.createCursorKeys()

    this.input.keyboard.on('keydown-A', function (event) {
      player.sprite.anims.play('wink', true)
    });
    this.input.keyboard.on('keydown-S', function (event) {
      player.sprite.anims.play('wink_c', true)
    });
    this.input.keyboard.on('keydown-C', function (event) {
      player.sprite.anims.play('crouch', true)
    });
    this.input.keyboard.on('keydown-X', function (event) {
      player.sprite.anims.play('crouch_reverse', true)
    });
  }

  update() {
    const walk_or_run = cursors.shift.isDown ? 'run_' : 'walk_'
    const move_speed = cursors.shift.isDown ? constants.RUN_SPEED : constants.WALK_SPEED

    if (cursors.down.isDown) {
      player.sprite.setVelocity(0, move_speed)
      player.sprite.anims.play(walk_or_run + 'down', true)
    } else if (cursors.up.isDown) {
      player.sprite.setVelocity(0, -move_speed)
      player.sprite.anims.play(walk_or_run + 'up', true)
    } else if (cursors.left.isDown) {
      player.sprite.setVelocity(-move_speed, 0)
      player.sprite.anims.play(walk_or_run + 'left', true)
    } else if (cursors.right.isDown) {
      player.sprite.setVelocity(move_speed, 0)
      player.sprite.anims.play(walk_or_run + 'right', true)
    } else {
      // player.anims.stop()
      player.sprite.setVelocity(0)
    }

    if (cursors.space.isDown) {
      player.sprite.anims.play('shock', true)
      //this.scene.start('scene2')
    }
  }
}