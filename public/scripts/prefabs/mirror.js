'use strict';

var Mirror = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'mirror', frame);
	this.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;

	this.inputEnabled = true;
	this.events.onInputDown.add(this.rotateMirror, this);
};

Mirror.prototype = Object.create(Phaser.Sprite.prototype);
Mirror.prototype.constructor = Mirror;

Phaser.Utils.extend(true, Mirror.prototype, {
	rotateMirror: function() {
		var newAngle = this.angle - 40;
		this.game.add.tween(this).to({angle: newAngle}, 100).start();
	},

	update: function() {

	}
});

module.exports = Mirror;
