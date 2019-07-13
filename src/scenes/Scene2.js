import constants from '../constants'

export default class Scene2 extends Phaser.Scene {
  constructor() {
    super({key: 'scene2', active: false})
  }

  create() {
    let text = this.add.text(constants.SCREEN_X / 2, constants.SCREEN_Y / 2,
      'This is Scene2').setOrigin(0.5)
  }
}