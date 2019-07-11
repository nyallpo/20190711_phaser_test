import Phaser from 'phaser'
import dudeImg from './assets/dude.png'
import sky from './assets/sky1.png'

const platforms = null
const player = null

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image('dude', dudeImg)
  this.load.image('sky', sky)
}

function create() {
  this.add.image(400, 300, 'sky')
  const dude = this.add.image(200, 100, 'dude')

}

function update() {

}
