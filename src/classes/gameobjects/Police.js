export default class Police extends Phaser.GameObjects.Image {
  constructor(scene, x, y) {
    //
    super(scene, x, y, `police`);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    //
    this.setScale(0.08);
    //this.setBounce(1,Phaser.Math.FloatBetween(0.4,0.8));

    //
  }
}
