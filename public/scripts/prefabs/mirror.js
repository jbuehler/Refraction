'use strict';

var Mirror = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'mirror', frame);
	this.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enableBody(this);
  this.body.bounce.set(1);

  this.body.allowGravity = false;
  this.body.immovable = true;
	this.body.checkCollision.up = false;
	this.body.checkCollision.right = false;

	this.inputEnabled = true;
	this.events.onInputDown.add(this.rotateMirror, this);
};

Mirror.prototype = Object.create(Phaser.Sprite.prototype);
Mirror.prototype.constructor = Mirror;

Phaser.Utils.extend(true, Mirror.prototype, {
	rotateMirror: function() {
		var newAngle = this.angle - 40;
		this.game.add.tween(this).to({angle: newAngle}, 100).start();
	}
});

module.exports = Mirror;
