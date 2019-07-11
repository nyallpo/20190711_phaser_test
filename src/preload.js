import skyImg from "./assets/sky.png"
import groundImg from "./assets/platform.png"
import dudeImg from "./assets/dude.png"

export default function() {
  this.load.image('sky', skyImg)
  this.load.image('ground', groundImg)
  this.load.spritesheet('dude', dudeImg, { frameWidth: 32, frameHeight: 48 })
}