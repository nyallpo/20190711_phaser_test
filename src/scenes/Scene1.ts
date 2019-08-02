import constants from '../constants'
import Player from '../players/Player'
import Keys from '../players/Keys'
import s1 from '../levels/s1.json'

export default class Scene1 extends Phaser.Scene {
  player: Player
  keys: Keys
  layer: any

  constructor() {
    super({key: 'scene1'})
  }

  preload() {
    console.log('Scene1 preload')
  }

  create() {
    Player.makeAnims(this)
    this.keys = new Keys(this)
    const bgColor = Phaser.Display.Color.IntegerToRGB(0x339933)
    this.cameras.main.setBackgroundColor(bgColor)

    const level = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 64, 0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 0, 64, 64, 64, 64, 0, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 64, 64, 64, 64, 0, 64, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 0, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 64, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    const map = this.make.tilemap({data: level, tileWidth: 16, tileHeight: 16})
    const tiles = map.addTilesetImage('tiles')
    map.createStaticLayer(0, tiles, 0, 0)

    this.player = new Player(this, 80, 40)

    // cursors = this.input.keyboard.createCursorKeys()
    //
    // this.input.keyboard.on('keydown-A', function () {
    //   this.player.sprite.anims.play('emo_wink', true)
    // });
    // this.input.keyboard.on('keydown-S', function () {
    //   this.player.sprite.anims.play('emo_wink_c', true)
    // });
    // this.input.keyboard.on('keydown-C', function (event) {
    //   this.player.sprite.anims.play('emo_crouch', true)
    // });
    // this.input.keyboard.on('keydown-X', function (event) {
    //   this.player.sprite.anims.play('emo_crouch_reverse', true)
    // });
  }

  update() {
    // Player movement
    if (this.keys.pressAnyCursor()) {
      this.player.move(this.keys)
    } else {
      this.player.wait()
    }


    // this.player.sprite.anims.currentAnim.key

    // if (cursors.space.isDown) {
    //   this.player.sprite.anims.play('shock', true)
    //this.scene.start('scene2')
    // }
  }
}