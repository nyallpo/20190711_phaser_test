import Phaser from "phaser"
import sky from "../assets/sky.png"
import ground from "../assets/platform.png"
import roa from '../assets/roa.png'

let player;
let cursors;

export default class Scene1 extends Phaser.Scene {
  constructor() {
    super({ key: 'scene1', active: true })

  }

  preload() {
    this.load.image('sky', sky)
    this.load.image('ground', ground)
    this.load.spritesheet('roa', roa, { frameWidth: 16, frameHeight: 16 })
  }

  create() {
    this.add.image(400, 300, 'sky')

    const platforms = this.physics.add.staticGroup()
    platforms.create(400, 568, 'ground').setScale(2).refreshBody()

    platforms.create(600, 400, 'ground');
    platforms.create(50, 250, 'ground');
    platforms.create(750, 220, 'ground');

    player = this.physics.add.sprite(200, 450, 'roa').setScale(4.0)
    player.setBounce(0.2)
    player.setCollideWorldBounds(true)

    this.createAnims()

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if(cursors.left.isDown) {
      player.setVelocityX(-160)
      player.anims.play('left', true)
    } else if (cursors.right.isDown) {
      player.setVelocityX(160)
      player.anims.play('right', true)
    } else {
      player.setVelocityX(0)
    }
  }

  createAnims() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('roa', {start: 8, end: 11}),
      frameRate: 10,
      repeat: -1
    })
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('roa', {start: 12, end: 15}),
      frameRate: 10,
      repeat: -1
    })
  }
}