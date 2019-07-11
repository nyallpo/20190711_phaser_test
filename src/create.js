export default function() {

  this.add.image(400, 300, 'sky')

  const platforms = this.physics.add.staticGroup()
  platforms.create(400, 568, 'ground').setScale(2).refreshBody()

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground');

  const player = this.physics.add.sprite(100, 450, 'dude');
  player.setBounce(0.2)
  player.setCollideWorldBounds(true)

  this.physics.add.collider(player, platforms);

  const cursors = this.input.keyboard.createCursorKeys();

}