import constants from '../constants'

export default class Scene2 extends Phaser.Scene {
  constructor() {
    super({key: 'scene2'})
  }

  create() {
    let text = this.add.text(constants.SCREEN_X / 2, constants.SCREEN_Y / 2,
      'イエイ！', {fontFamily: 'misaki', fontSize: '1.4rem'}).setOrigin(0.5)
  }
}