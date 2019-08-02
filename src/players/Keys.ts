export default class Keys {
  input: Phaser.Input.InputPlugin
  cursors: Phaser.Types.Input.Keyboard.CursorKeys
  moveKeys: any
  emoKeys: any

  constructor(scene: Phaser.Scene) {
    this.input = scene.input
    this.cursors = scene.input.keyboard.createCursorKeys()
    this.moveKeys = scene.input.keyboard.addKeys('W,A,S,D')
    this.emoKeys = scene.input.keyboard.addKeys('J,K,L')
  }

  pressUp(): boolean {
    return (this.cursors.up.isDown || this.moveKeys.W.isDown)
  }
  pressDown(): boolean {
    return (this.cursors.down.isDown || this.moveKeys.S.isDown)
  }
  pressLeft(): boolean {
    return (this.cursors.left.isDown || this.moveKeys.A.isDown)
  }
  pressRight(): boolean {
    return (this.cursors.right.isDown || this.moveKeys.D.isDown)
  }
  pressAnyCursor(): boolean {
    return (this.pressUp() || this.pressDown() || this.pressLeft() || this.pressRight())
  }
  pressShift(): boolean {
    return this.cursors.shift.isDown
  }
  pressSpace():boolean {
    return this.cursors.space.isDown
  }
}