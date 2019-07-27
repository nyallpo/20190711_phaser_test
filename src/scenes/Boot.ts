import Phaser from "phaser"

import Roa from '../players/Roa'
import tiles from '../assets/basictiles.png'

/**
 * ゲームに必要なアセットを読み込むためのシーン
 */
export default class Boot extends Phaser.Scene {
  constructor() {
    super({key: 'boot', active: true})
  }

  preload() {
    console.log('Boot start')

    this.load.on('progress', function (value) {
      console.log(value);
    });

    this.load.on('fileprogress', function (file) {
      console.log(file.src);
    });

    this.load.on('complete', () => {
      console.log('complete');
      this.scene.start('scene1')
    });

    // Loading
    this.load.image('tiles', tiles)
    Roa.preload(this)
  }
}