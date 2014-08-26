'use strict';
var Beam = require('./beam');

var Prism = function(game, x, y, frame) {
	Phaser.Sprite.call(this, game, x, y, 'prism', frame);
	this.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enableBody(this);

  this.body.allowGravity = false;
  this.body.immovable = true;
};

Prism.prototype = Object.create(Phaser.Sprite.prototype);
Prism.prototype.constructor = Prism;

Phaser.Utils.extend(true, Prism.prototype, {
	breakBeam: function(beam) {
		beam.destroy();
		var velocity = beam.body.velocity;

		// break beam into ring of colored beams
		for (var i = 0; i < 6; i ++) {
			var newBeam = new Beam();
			newBeam.body.velocity.setTo(velocity.x - i, velocity.y - i);
		}
	},

	checkBeamColor: function(beam) {
		if (beam.color !== 'white') {
			return false;
		}

		return true;
	}
});

module.exports = Prism;
