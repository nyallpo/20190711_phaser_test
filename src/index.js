import Phaser from "phaser"
import logoImg from "./assets/logo.png"
import dudeImg from './assets/dude.png'

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
}

const game = new Phaser.Game(config)

function preload() {
  this.load.image("logo", logoImg)
  this.load.image('dude', dudeImg)
}

function create() {
  const logo = this.add.image(400, 150, "logo").setScale(0.2)
  const dude = this.add.image(200, 100, 'dude')

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: false,
    loop: -1
  });
}
